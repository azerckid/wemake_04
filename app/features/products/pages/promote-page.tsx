import { type MetaFunction } from "react-router";
import type { DateRange } from "react-day-picker";
import { Form } from "react-router";
import { useState } from "react";
import { DateTime } from "luxon";

import { Hero } from "~/common/components/hero";
import SelectPair from "~/common/components/select-pair";
import { Calendar } from "~/common/components/ui/calendar";
import { Button } from "~/common/components/ui/button";
import { Label } from "~/common/components/ui/label";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | ProductHunt Clone" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();
  const totalDays =
    promotionPeriod?.from && promotionPeriod.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
        DateTime.fromJSDate(promotionPeriod.from),
        "days"
      ).days
      : 0;
  return (
    <div>
      <Hero
        title="Promote Your Product"
        subtitle="Boost your product's visibility."
      />
      <Form className="max-w-sm mx-auto flex flex-col gap-10 items-center">
        <SelectPair
          label="Select a product"
          description="Select the product you want to promote."
          name="product"
          placeholder="Select a product"
          options={[
            {
              label: "AI Dark Mode Maker",
              value: "ai-dark-mode-maker",
            },
            {
              label: "AI Dark Mode Maker",
              value: "ai-dark-mode-maker-1",
            },
            {
              label: "AI Dark Mode Maker",
              value: "ai-dark-mode-maker-2",
            },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full">
          <Label className="flex flex-col gap-1">
            Select a range of dates for promotion{" "}
            <small className="text-muted-foreground text-center ">
              Minimum duration is 3 days.
            </small>
          </Label>
          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <Button disabled={totalDays === 0}>
          Go to checkout (${totalDays * 20})
        </Button>
        {promotionPeriod?.from && promotionPeriod.to && (
          <p className="text-sm text-muted-foreground text-center">
            {DateTime.fromJSDate(promotionPeriod.from).toFormat("M월 d일")}부터{" "}
            {DateTime.fromJSDate(promotionPeriod.to).toFormat("M월 d일")}까지
            선택하셨습니다.
          </p>
        )}
      </Form>
    </div>
  );
}

