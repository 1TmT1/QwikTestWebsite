import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./button.css?inline";

interface ItemProps {
    handleFunction?: any;
    title?: string;
    classText?: string;
}

export const Button = component$((props: ItemProps) => {

    useStylesScoped$(styles);
    
    return (
        <button class={"bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400 mona " + props.classText}>
            {props.title || "Click Me"}
        </button>
    );
});