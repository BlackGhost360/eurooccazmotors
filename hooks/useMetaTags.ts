import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MetaTagsConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

/**
 * Hook pour gérer les meta tags SEO multilingues
 */
export const useMetaTags = (config: MetaTagsConfig) => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = location.pathname.split('/')[1] || 'fr';
  const baseUrl = 'https://eurooccazmotors.com';

  useEffect(() => {
    // Mettre à jour le titre
    document.title = config.title;

    // Mettre à jour ou créer les meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        isProperty ? element.setAttribute('property', name) : element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Meta tags standard
    updateMetaTag('description', config.description);
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', currentLang.toUpperCase());

    // Open Graph
    updateMetaTag('og:title', config.title, true);
    updateMetaTag('og:description', config.description, true);
    updateMetaTag('og:type', config.ogType || 'website', true);
    updateMetaTag('og:url', `${baseUrl}${location.pathname}`, true);
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
    }

    // Twitter Card
    updateMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
    updateMetaTag('twitter:title', config.title);
    updateMetaTag('twitter:description', config.description);
    if (config.ogImage) {
      updateMetaTag('twitter:image', config.ogImage);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseUrl}${location.pathname}`;

    // hreflang pour versions multilingues
    const languages = ['fr', 'en', 'it'];
    const pathWithoutLang = location.pathname.split('/').slice(2).join('/');

    languages.forEach((lang) => {
      let hreflang = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.rel = 'alternate';
        hreflang.setAttribute('hreflang', lang);
        document.head.appendChild(hreflang);
      }
      hreflang.href = `${baseUrl}/${lang}${pathWithoutLang ? '/' + pathWithoutLang : '/'}`;
    });

    // hreflang x-default
    let hrefDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement;
    if (!hrefDefault) {
      hrefDefault = document.createElement('link');
      hrefDefault.rel = 'alternate';
      hrefDefault.setAttribute('hreflang', 'x-default');
      document.head.appendChild(hrefDefault);
    }
    hrefDefault.href = `${baseUrl}/fr${pathWithoutLang ? '/' + pathWithoutLang : '/'}`;
  }, [config, location.pathname, currentLang, i18n.language]);
};
