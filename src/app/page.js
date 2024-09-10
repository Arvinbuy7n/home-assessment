"use client";

import { TodoMainComponent } from "@/components/TodoMainComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 py-10">
      <p className="text-center">Tech Home Assessment</p>

      <div className="bg-sky-200 rounded-lg w-[400px]">
        <TodoMainComponent />
      </div>
    </div>
  );
}
