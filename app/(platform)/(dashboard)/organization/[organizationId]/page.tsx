import { Separator } from "@/components/ui/separator";
import { Info } from "./_components/info";
import { BoardList } from "./_components/board-list";

const OrganizationIdPage = async () => {
  return (
    <div className="w-full mb-20 p-4">
      <Info />
      <Separator className="my-4" />
      <BoardList />
    </div>
  );
};

export default OrganizationIdPage;
