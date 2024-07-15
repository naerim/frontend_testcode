import { ReactNode } from "react";
import { Toast } from "./Toast";
import {
  ToastActionContext,
  ToastState,
  ToastStateContext,
  ToastStyle,
} from "./ToastContext";
import { useToastProvider } from "./useToastProvider";
export { useToastAction, useToastState } from "./hooks";
export type { ToastState, ToastStyle };

export const ToastProvider = ({
  children,
  defaultState,
}: {
  children: ReactNode;
  defaultState?: Partial<ToastState>;
}) => {
  const { isShown, message, style, showToast, hideToast } =
    useToastProvider(defaultState);
  return (
    <ToastStateContext.Provider value={{ isShown, message, style }}>
      <ToastActionContext.Provider value={{ showToast, hideToast }}>
        {children}
        {/* isShow이 true가 되면 표시 */}
        {isShown && <Toast message={message} style={style} />}
      </ToastActionContext.Provider>
    </ToastStateContext.Provider>
  );
};
