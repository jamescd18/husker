import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { ClientOnly } from "@/components/util/ClientOnly";
import { LinkSet } from "@/components/link/LinkSet";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { Spacer } from "@/components/util/Spacer";
import { showToast } from "@/components/util/Toast";
import { useFavorites, useSettings } from "@/hooks/settings";
import { favoritesToLinks } from "@/lib/favorites";

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FavoritesPage = () => {
  const {
    settings: { favoritesEnabled, favorites },
  } = useSettings();
  const { setFavoritesEnabled } = useFavorites();
  const router = useRouter();

  useEffect(() => {
    // No need to be here if favorites aren't enabled
    if (!favoritesEnabled) {
      setFavoritesEnabled(true);
      showToast({
        text: "Favorites have been enabled",
      });
    }
  }, []);

  const favoriteLinks = favoritesToLinks(favorites);

  return (
    <>
      <NextSeo title={"Favorites"} description={"All your favorites"} />
      <ArticleHead title={"Favorites"} />

      <article className="wrapper" suppressHydrationWarning>
        <ClientOnly>
          {favoriteLinks.length == 0 && (
            <>
              <NoFavorites />
              <Spacer size="md" />
            </>
          )}
          <div className="flex">
            <Button icon="pen" href="/settings" size="sm">
              Edit
            </Button>
          </div>
          <Spacer size="md" />
          <LinkSet showTitle={false} showFull links={favoriteLinks} />
        </ClientOnly>
      </article>
    </>
  );
};

export default FavoritesPage;
