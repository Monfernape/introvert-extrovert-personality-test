type Props = {
  index: number;
  activeIndex: number;
  component: any;
};

export const Step = ({ index, activeIndex, component: Component }: Props) => {
  if (index !== activeIndex) return null;

  return Component;
};
