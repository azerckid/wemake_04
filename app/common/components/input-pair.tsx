import * as React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type InputPairProps = {
    label: string;
    description: string;
    textArea?: false;
} & React.ComponentProps<"input">;

type TextareaPairProps = {
    label: string;
    description: string;
    textArea: true;
} & React.ComponentProps<"textarea">;

export default function InputPair({
    label,
    description,
    textArea = false,
    ...rest
}: InputPairProps | TextareaPairProps) {
    return (
        <div className="space-y-2 flex flex-col">
            <Label htmlFor={rest.id} className="flex flex-col gap-1">
                {label}
                <small className="text-muted-foreground">{description}</small>
            </Label>
            {textArea ? (
                <Textarea rows={4} className="resize-none" {...(rest as React.ComponentProps<"textarea">)} />
            ) : (
                <Input {...(rest as React.ComponentProps<"input">)} />
            )}
        </div>
    );
}

