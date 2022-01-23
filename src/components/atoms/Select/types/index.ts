import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

import { Option } from "@/shared/types";

/**
 * SelectコンポーネントのPropsの型
 *
 * styled-componentsのinputタグの型とReactの組み込みのinputタグの型で互換性を合わせるために'ref'を取り除く。
 * https://github.com/ant-design/ant-design/issues/10405
 */
export type SelectProps = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  "ref"
> & {
  options: Option[];
};
