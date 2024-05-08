const DescriptionBlock = ({ description }: { description: string }) => {
  return (
    <p className="bg-slate-100 text-slate-500 p-8 rounded-lg">{description}</p>
  );
};

export default DescriptionBlock;
