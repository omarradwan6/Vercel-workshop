"use client";

import { useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";

type ChatRole = "user" | "assistant";

interface StubMessage {
  id: string;
  role: ChatRole;
  text: string;
}

const PLACEHOLDER_MESSAGES: StubMessage[] = [
  {
    id: "stub-1",
    role: "user",
    text: "Hey! Looking for a gift under $50. Any ideas?",
  },
  {
    id: "stub-2",
    role: "assistant",
    text: "Great call — the Matte Black Stainless Steel Water Bottle is one of our most popular picks at $28. It's understated, ships in a clean gift box, and pairs nicely with the Vercel-branded tote if you want to push the budget a bit.",
  },
  {
    id: "stub-3",
    role: "user",
    text: "Does the bottle come in any other colors?",
  },
  {
    id: "stub-4",
    role: "assistant",
    text: "Right now the bottle is only available in matte black, but the tumbler is offered in white if you'd prefer something brighter. Want me to pull up both side-by-side?",
  },
];

/**
 * Stubbed chat UI for the agent sidebar.
 *
 * No AI integration yet — submitting just appends the typed text as a new
 * "user" message to local state. Placeholder messages give the panel a
 * realistic two-role layout for design review.
 */
export function AgentChat() {
  const [messages, setMessages] = useState<StubMessage[]>(PLACEHOLDER_MESSAGES);
  const [input, setInput] = useState("");

  const handleSubmit = (message: PromptInputMessage) => {
    const text = message.text.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { id: `local-${Date.now()}`, role: "user", text },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Conversation className="flex-1">
        <ConversationContent>
          {messages.map((m) => (
            <Message from={m.role} key={m.id}>
              <MessageContent>{m.text}</MessageContent>
            </Message>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="border-t p-3">
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputBody>
            <PromptInputTextarea
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              placeholder="Ask the agent"
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools />
            <PromptInputSubmit status="ready" disabled={!input.trim()} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}
