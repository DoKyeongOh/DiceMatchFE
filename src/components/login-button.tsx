import { useState } from "react";
import { BasicAccount } from "../types/auth.type";
import { Button, Form, Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import { login } from "../api/login/login.api";

const LoginButton = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const { control, watch, trigger } = useForm<BasicAccount>();

  const onSubmit = async (data: BasicAccount) => {
    if (await trigger()) {
      login(data);
    }
  };

  return (
    <>
      <Button
        type="primary"
        className="focus:outline-none"
        onClick={() => setShowLoginModal(true)}
      >
        로그인
      </Button>

      <Modal
        title="로그인"
        open={showLoginModal}
        onOk={() => {
          setShowLoginModal(false);
          onSubmit(watch());
        }}
        onCancel={() => setShowLoginModal(false)}
        okText="로그인"
        cancelText="취소"
      >
        <Controller
          name="identity"
          control={control}
          render={({ field }) => {
            return (
              <Form.Item
                layout="vertical"
                label="아이디"
                rules={[{ required: true, message: "아이디를 입력해주세요" }]}
              >
                <Input {...field} />
              </Form.Item>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: "비밀번호를 입력해주세요" }} // ① Controller에 검증 룰 지정
          render={({
            field,
            fieldState: { error }, // ② fieldState.error로 에러 메시지 접근
          }) => (
            <Form.Item
              label="비밀번호"
              validateStatus={error ? "error" : ""} // 에러 시 빨간색 강조
              help={error?.message} // 에러 메시지 노출
            >
              <Input.Password {...field} />
            </Form.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default LoginButton;
