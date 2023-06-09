import React from "react";
import { Provider, shallowEqual } from "react-redux";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "@/components/redux/rtk/hooks";
import { store } from "./Store";
import { requestToStoreAction } from "./modules/Person";

function Show() {
  const { person } = useAppSelector((state) => state, shallowEqual);
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={async () => {
        try {
          const result = await dispatch(
            requestToStoreAction({ key: "a" })
          ).unwrap(); // 这里可以传参（可选）
          console.log("result", result);
        } catch (e) {
          // error
        }
      }}
    >
      ReduxRtk: {person?.ids?.[0]}
    </Button>
  );
}

export function ReduxRtk() {
  return (
    <Provider store={store}>
      <Show />
    </Provider>
  );
}
