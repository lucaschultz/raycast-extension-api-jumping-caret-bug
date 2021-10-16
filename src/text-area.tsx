import { Form } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const [textAreaText, setTextAreaText] = useState<string>("Try typing something here →  ← between the arrows!");
  const [textFieldText, setTextFieldText] = useState<string>("Try typing something here →  ← between the arrows!");

  return (
    <Form onSubmit={(values) => console.log(values)}>
      <Form.TextArea id="textarea" title="Text Area" value={textAreaText} onChange={setTextAreaText} />
      <Form.TextField id="textfield" title="Text Field" value={textFieldText} onChange={setTextFieldText} />
    </Form>
  );
}
