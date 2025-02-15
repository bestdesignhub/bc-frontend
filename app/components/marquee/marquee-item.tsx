type MarqueeItemProps = {
  key: number;
  title: string;
};

export default function MarqueeItem({ title }: MarqueeItemProps) {
  return (
    <div className="marqueebox">
      <h6>{title}</h6>
    </div>
  );
}
