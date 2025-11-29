CREATE TABLE "feeds" (
    "id_feed" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "id_feed" PRIMARY KEY ("id_feed")
);

CREATE TABLE "projects" (
    "id_project" SERIAL NOT NULL,
    "img_url" TEXT NOT NULL,
    "project_url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "id_project" PRIMARY KEY ("id_project")
);

CREATE TABLE "content" (
    "id_content" SERIAL NOT NULL,

    "slug" TEXT NOT NULL,
    "repository" TEXT,

    "lang" TEXT,

    "type" TEXT NOT NULL, -- "post" or "link"
    "title" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,

    -- Content for SEO
    "description" TEXT,

    -- content for "links"
    "external_url" TEXT,
    "source" TEXT,

    "tags" TEXT[],
    
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id_content"),
    
    CONSTRAINT "lang_required_for_posts"
    CHECK (type <> 'post' OR lang IS NOT NULL)
);


 CREATE UNIQUE INDEX "content_post_idx" ON "content" (slug, lang) WHERE lang IS NOT NULL;

 CREATE UNIQUE INDEX "content_link_idx" ON "content" (slug) WHERE lang IS NULL;