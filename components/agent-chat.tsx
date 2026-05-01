"use client";

/**
 * Welcome! This is the chat panel for the workshop.
 *
 * Right now it's wired to a local placeholder array so the panel renders
 * something while you work. During the workshop you'll connect it to a
 * real agent: swap the local `useState` for `useChat` from the AI SDK,
 * point the form at `sendMessage`, and render each message's `parts`
 * inside `<ConversationContent>`.
 *
 * Workshop docs: https://agent-foundations-certification.vercel.app/docs/chat-agent
 */

import type { UIMessage } from "ai";
import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";

const PLACEHOLDER_MESSAGES: UIMessage[] = [
  {
    id: "placeholder-1",
    role: "user",
    parts: [{ type: "text", text: "Hi!" }],
  },
  {
    id: "placeholder-2",
    role: "assistant",
    parts: [{ type: "text", text: "Hey there. How can I help today?" }],
  },
  {
    id: "placeholder-3",
    role: "user",
    parts: [{ type: "text", text: "What can you do?" }],
  },
  {
    id: "placeholder-4",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "I'm a starter agent — once you wire me up to the AI SDK in the workshop, I'll be able to answer questions, run tools, and more.",
      },
    ],
  },
];

export function AgentChat() {
  const [messages, setMessages] = useState<UIMessage[]>(PLACEHOLDER_MESSAGES);
  const [input, setInput] = useState("");

  const handleSubmit = (message: PromptInputMessage) => {
    const text = message.text.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: nanoid(),
        role: "user",
        parts: [{ type: "text", text }],
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Conversation className="flex-1">
        <ConversationContent>
          {/* Render `messages` here. Each one has a `role` and a `parts` array. */}
          {null}
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
