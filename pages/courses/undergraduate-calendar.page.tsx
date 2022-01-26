import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { PDFEmbed } from "@/components/PDFEmbed";
import { Spacer } from "@/components/Spacer";

const UndergraduateCalendarPage = () => {
  const calendarHref = "/files/calendar-2021-2022.pdf";

  return (
    <>
      <ArticleHead
        backButtonHref="/courses"
        backButtonText="Courses"
        title="Undergraduate Calendar 2021-2022"
      ></ArticleHead>

      <PDFEmbed href={calendarHref}></PDFEmbed>

      <Spacer />

      <div className="wrapper">
        <Button href={calendarHref} icon="download">
          Download
        </Button>
      </div>
    </>
  );
};

export default UndergraduateCalendarPage;