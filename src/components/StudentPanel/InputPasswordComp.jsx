import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { Field } from "formik";

const InputPasswordComp = ({ name }) => {
  return (
    <Field name={name}>
      {({ field }) => (
        <Input.Password
          {...field}
          size="default md:large md:py-2 "
          placeholder="************"
          className="flex-row-reverse  text-left  w-full  border border-gray-400 rounded-md placeholder:font-irSans placeholder:font-light cursor-pointer "
          dir="ltr"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      )}
    </Field>
  );
};
export { InputPasswordComp };

