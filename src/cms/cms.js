import CMS from "netlify-cms-app";

import HomePagePreview from "./preview-templates/HomePagePreview";
import BlogPagePreview from "./preview-templates/BlogPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("blog", BlogPagePreview);
