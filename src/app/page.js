"use client";

import { TodoDueDate } from "@/components/TodoDueDate";
import { TodoMainComponent } from "@/components/TodoMainComponent";
import { TodoPriority } from "@/components/TodoPriority";
import { TodoSearch } from "@/components/TodoSearch";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState("page1");

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="text-center">Tech Home Assessment</p>

      <div className="flex gap-6">
        <div>
          <select
            onChange={(e) => setStep(e.target.value)}
            className="bg-white border shadow-xl px-3 py-1 rounded-lg"
          >
            {[
              { value: "page1", label: "Todo" },
              { value: "page2", label: "Due Date" },
              { value: "page3", label: "Priority" },
              { value: "page4", label: "Search" },
            ].map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-full bg-sky-200 rounded-lg">
          {step === "page1" && <TodoMainComponent />}
          {step === "page2" && <TodoDueDate />}
          {step === "page3" && <TodoPriority />}
          {step === "page4" && <TodoSearch />}
        </div>
      </div>
    </div>
  );
}
