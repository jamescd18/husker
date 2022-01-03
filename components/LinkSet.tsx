import { Link } from "@/types/category";
import { SmartLink } from "@/components/SmartLink";
import { Title } from "@/components/title";
import { Icon } from "./Icon";
import { Spacer } from "./Spacer";
import { LinkButton } from "./LinkButton";

interface LinkSetProps {
  title?: string;
  moreInfoHref?: string;
  links: Link[];
  pages?: Link[];
  showTitle?: boolean;
  showFull?: boolean;
}

export const LinkSet = ({
  title,
  moreInfoHref,
  links,
  pages,
  showTitle = false,
  showFull = false,
}: LinkSetProps) => {
  return (
    <section>
      {showTitle && (
        /* Show the more info caret only if the title is shown */
        <>
          <SmartLink
            href={moreInfoHref!}
            className="flex items-center space-x-xs"
          >
            <Title level={3}>{title}</Title>
            <Icon id="caretright" className="text-xl"></Icon>
          </SmartLink>
          <Spacer size="xs"></Spacer>
        </>
      )}

      <div
        className="grid grid-cols-2 lg:grid-cols-3 gap-md"
        style={{ minWidth: 0, minHeight: 0 }}
      >
        {links.map((link) => {
          return (
            <LinkButton
              key={link.href}
              link={link}
              showDescription={showFull}
            ></LinkButton>
          );
        })}
      </div>

      {showFull && pages && (
        <>
          <Spacer size="lg"></Spacer>
          <hr />
          <Spacer size="lg"></Spacer>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-md">
            {pages.map((link) => {
              return (
                <LinkButton
                  key={link.href}
                  link={link}
                  showDescription={showFull}
                ></LinkButton>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};
