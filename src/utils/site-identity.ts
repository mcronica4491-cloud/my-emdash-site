/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "Based Movie Reviews";
const DEFAULT_SITE_TAGLINE = "Big-screen opinions. No studio notes.";

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	const title = settings?.title && settings.title !== "My Blog"
		? settings.title
		: DEFAULT_SITE_TITLE;
	const tagline = settings?.tagline && settings.tagline !== "Thoughts on building for the web"
		? settings.tagline
		: DEFAULT_SITE_TAGLINE;

	return {
		siteTitle: title,
		siteTagline: tagline,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
