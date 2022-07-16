import { BackButton } from "./BackButton";
import { Spacer } from "./util/Spacer";
import { Title } from "./Title";

interface ArticleHeadProps {
  backButtonHref?: string;
  backButtonText?: string;
  title: string;
}

export const ArticleHead = ({
  backButtonHref = "/",
  backButtonText = "Links",
  title,
}: ArticleHeadProps) => {
  return (
    <>
      <div className="">
        <div className="wrapper">
          <Spacer size="lg"></Spacer>
          <BackButton href={backButtonHref}>{backButtonText}</BackButton>
          <Title weightClassName="font-black">{title}</Title>
          <Spacer></Spacer>
        </div>
      </div>
    </>
  );
};
