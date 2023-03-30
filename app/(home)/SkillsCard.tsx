import Card from "@/components/Card";
import DevIcon from "@/components/DevIcon";

const SkillsCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <Card className="bg-foreground p-5 text-center transition duration-300 hover:scale-105 hover:transform">
      <DevIcon icon={icon} size={50} />
      <p className="mt-5">{name}</p>
    </Card>
  );
};

export default SkillsCard;
