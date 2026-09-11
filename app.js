const STORAGE_KEY = "timeline-builder-state";
const LANGUAGE_KEY = "frise-factory-language";
const FULL_LABEL_VISIBILITY = { dates: true, titles: true, keywords: true, images: true };

const sampleMarkers = `1870 ; Proclamation de la IIIe République ; République, nouveau régime
Printemps 1871 ; Insurrection de la Commune de Paris ; insurrection, Paris
1881 ; Loi sur la liberté de la presse ; libertés publiques
1881-1882 ; Lois Ferry ; école gratuite, laïque et obligatoire
1894-1906 ; Affaire Dreyfus ; justice, antisémitisme
1905 ; Loi de séparation des Églises et de l'État ; laïcité
1914-1918 ; Première Guerre mondiale ; guerre totale
1936 ; Front populaire ; congés payés
Juillet 1940 ; Fin de la IIIe République ; régime de Vichy`;

const sampleMarkersEn = `1870 ; Proclamation of the Third Republic ; republic, new regime
Spring 1871 ; Paris Commune uprising ; uprising, Paris
1881 ; Freedom of the Press Act ; civil liberties
1881-1882 ; Ferry Laws ; free, secular and compulsory education
1894-1906 ; Dreyfus Affair ; justice, antisemitism
1905 ; Separation of Churches and State Act ; secularism
1914-1918 ; First World War ; total war
1936 ; Popular Front ; paid leave
July 1940 ; End of the Third Republic ; Vichy regime`;

const translations = {
  fr: {
    subtitle: "Créez, personnalisez et exportez vos frises chronologiques.",
    langButton: "FR", langLabel: "Passer en anglais", information: "Informations", theme: "Changer de thème",
    steps: ["Je choisis mes repères", "Je personnalise ma frise", "Je découvre ma frise", "J'exporte ma frise"],
    sample: "Exemple", clear: "Vider", titleLabel: "Titre de la frise", subtitleLabel: "Sous-titre de la frise",
    subtitlePlaceholder: "Facultatif", listLabel: "Liste à importer ou taper", formatsAccepted: "Formats acceptés",
    formatExamples: [
      "Juin 1945 : Création de l'ONU", "6 juin 1944 ; Débarquement de Normandie",
      "1914-1918 | Première Guerre mondiale",
      "1944 ; Droit de vote des femmes ; citoyenneté, suffrage",
      "2002 ; Mise en circulation de l'euro ; monnaie, Union européenne ; URL Wikimedia"
    ],
    importFile: "Importer fichier", cleanList: "Nettoyer la liste", addImage: "Ajouter image", removeImages: "Enlever images",
    imageNote: "Les images sont recherchées automatiquement dans la banque Wikimedia Commons.",
    timelineType: "Type de frise", complete: "Complète", blank: "Vierge", hideDates: "Masquer les dates", hideTitles: "Masquer les intitulés", hideKeywords: "Masquer les mots-clés", hideImages: "Masquer les images",
    orientation: "Orientation", landscape: "Paysage", portrait: "Portrait", density: "Densité", airy: "Aérée", standard: "Standard",
    axisDateSize: "Taille des dates sur l’axe", small: "Petite", medium: "Moyenne", large: "Grande",
    palette: "Palette de la frise", monochrome: "Noir et blanc", paletteName: "Palette {{number}}",
    previewHelp: "Déplacez les boîtes pour ajuster leur position et modifiez les périodes directement sur l’axe du temps.",
    resetPositions: "Réinitialiser les positions", markerSingular: "repère", markerPlural: "repères",
    teacherTimeline: "Frise repère", studentTimeline: "Frise à compléter",
    completeExport: "Ma frise complète", studentExport: "Ma frise élève",
    completeFormats: "Formats de la frise complète", studentFormats: "Formats de la frise élève",
    ready: "Frise prête. Choisissez maintenant votre format d'export.",
    needMarkers: "Ajoutez au moins deux repères pour construire une frise.", empty: "Collez une liste de repères pour générer la frise.",
    defaultTimelineTitle: "Frise chronologique", defaultMarker: "Repère",
    creatorCredit: "Frise réalisée avec Frise Factory, La Classe d'Histoire.", commonsCredit: "Images issues de Wikimedia Commons.",
    moveCard: "Déplacer {{title}}", resizeStart: "Modifier le début de {{title}}", resizeEnd: "Modifier la fin de {{title}}",
    periodAdjusted: "Période ajustée. Sa longueur est conservée à l’impression et dans le SVG.",
    layoutSaved: "Mise en page enregistrée. La frise imprimée et le SVG gardent ces dimensions.",
    addMarkersFirst: "Ajoutez des repères avant de chercher des images Wikimedia.", searchingImages: "Recherche d'images significatives sur Wikimedia Commons...",
    noImageFound: "Aucune nouvelle image Wikimedia fiable n'a été trouvée automatiquement.", noImageToRemove: "Aucune image Wikimedia à retirer.",
    imagesAdded: "{{count}} image{{plural}} Wikimedia ajoutée{{plural}}. Vérifiez les choix proposés et remplacez une URL si nécessaire.",
    imagesRemoved: "{{count}} image{{plural}} Wikimedia retirée{{plural}}.",
    creatingImage: "Création de l’image {{label}} en {{format}}…", imageExportFailed: "L’image n’a pas pu être créée. Vérifiez que les illustrations Wikimedia sont accessibles, puis réessayez.",
    creatingPdf: "Création du PDF {{label}}…", pdfExportFailed: "Le PDF n’a pas pu être créé. Vérifiez que les illustrations Wikimedia sont accessibles, puis réessayez.",
    svgDownloaded: "Fichier SVG de la {{label}} téléchargé.", imageDownloaded: "Image {{label}} {{format}} téléchargée en haute définition ({{width}} × {{height}} px).",
    pdfDownloaded: "PDF {{label}} téléchargé au format A4 {{orientation}}.", jsonDownloaded: "Fichier JSON de la {{label}} téléchargé.",
    aboutTitle: "À propos", close: "Fermer", aboutLead: "Conçu par Alexandre Balet",
    aboutRole: "Enseignant et formateur Histoire-Géographie, Bangkok, AEFE", aboutDevelopment: "Développée avec l’assistance de Codex et de ChatGPT 5.5",
    contact: "Contact :", updated: "Dernière mise à jour : 11 septembre 2026",
    footerHtml: `Créé par <a href="https://th.linkedin.com/in/alexandre-balet" target="_blank" rel="noopener"><strong>Alexandre Balet</strong></a> pour <a href="http://www.laclassedhistoire.fr/" target="_blank" rel="noopener"><strong>La Classe d'Histoire</strong></a> · 2026 · Ce travail est placé sous licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr" target="_blank" rel="noopener"><strong>Creative Commons CC BY-SA</strong></a>.`,
    licenseLabel: "Consulter la licence Creative Commons CC BY-SA"
  },
  en: {
    subtitle: "Create, customise and export your timelines.",
    langButton: "EN", langLabel: "Switch to French", information: "Information", theme: "Change theme",
    steps: ["I choose my milestones", "I customise my timeline", "I review my timeline", "I export my timeline"],
    sample: "Example", clear: "Clear", titleLabel: "Timeline title", subtitleLabel: "Timeline subtitle",
    subtitlePlaceholder: "Optional", listLabel: "Import or type a list", formatsAccepted: "Accepted formats",
    formatExamples: [
      "June 1945 : Creation of the United Nations", "6 June 1944 ; Normandy landings",
      "1914-1918 | First World War",
      "1944 ; Women's right to vote ; citizenship, suffrage",
      "2002 ; Introduction of euro banknotes and coins ; currency, European Union ; Wikimedia URL"
    ],
    importFile: "Import file", cleanList: "Clean list", addImage: "Add image", removeImages: "Remove images",
    imageNote: "Images are found automatically in the Wikimedia Commons collection.",
    timelineType: "Timeline type", complete: "Complete", blank: "Blank", hideDates: "Hide dates", hideTitles: "Hide labels", hideKeywords: "Hide keywords", hideImages: "Hide images",
    orientation: "Orientation", landscape: "Landscape", portrait: "Portrait", density: "Density", airy: "Spacious", standard: "Standard",
    axisDateSize: "Date size on the axis", small: "Small", medium: "Medium", large: "Large",
    palette: "Timeline palette", monochrome: "Black and white", paletteName: "Palette {{number}}",
    previewHelp: "Move the boxes to adjust their position and edit periods directly on the time axis.",
    resetPositions: "Reset positions", markerSingular: "milestone", markerPlural: "milestones",
    teacherTimeline: "Reference timeline", studentTimeline: "Timeline to complete",
    completeExport: "My complete timeline", studentExport: "My student timeline",
    completeFormats: "Complete timeline formats", studentFormats: "Student timeline formats",
    ready: "Your timeline is ready. Choose an export format.",
    needMarkers: "Add at least two milestones to build a timeline.", empty: "Paste a list of milestones to generate a timeline.",
    defaultTimelineTitle: "Timeline", defaultMarker: "Milestone",
    creatorCredit: "Timeline created with Frise Factory, La Classe d'Histoire.", commonsCredit: "Images from Wikimedia Commons.",
    moveCard: "Move {{title}}", resizeStart: "Edit the start of {{title}}", resizeEnd: "Edit the end of {{title}}",
    periodAdjusted: "Period adjusted. Its length is preserved in print and SVG exports.",
    layoutSaved: "Layout saved. Printed and SVG timelines retain these dimensions.",
    addMarkersFirst: "Add milestones before searching for Wikimedia images.", searchingImages: "Searching Wikimedia Commons for meaningful images...",
    noImageFound: "No reliable new Wikimedia image was found automatically.", noImageToRemove: "There are no Wikimedia images to remove.",
    imagesAdded: "{{count}} Wikimedia image{{plural}} added. Review the suggestions and replace a URL if needed.",
    imagesRemoved: "{{count}} Wikimedia image{{plural}} removed.",
    creatingImage: "Creating the {{label}} as a {{format}} image…", imageExportFailed: "The image could not be created. Check that Wikimedia illustrations are accessible, then try again.",
    creatingPdf: "Creating the {{label}} PDF…", pdfExportFailed: "The PDF could not be created. Check that Wikimedia illustrations are accessible, then try again.",
    svgDownloaded: "{{label}} SVG downloaded.", imageDownloaded: "{{label}} {{format}} downloaded in high definition ({{width}} × {{height}} px).",
    pdfDownloaded: "{{label}} PDF downloaded in A4 {{orientation}} format.", jsonDownloaded: "{{label}} JSON file downloaded.",
    aboutTitle: "About", close: "Close", aboutLead: "Designed by Alexandre Balet",
    aboutRole: "History and Geography teacher and trainer, Bangkok, AEFE", aboutDevelopment: "Developed with the assistance of Codex and ChatGPT 5.5",
    contact: "Contact:", updated: "Last updated: 11 September 2026",
    footerHtml: `Created by <a href="https://th.linkedin.com/in/alexandre-balet" target="_blank" rel="noopener"><strong>Alexandre Balet</strong></a> for <a href="http://www.laclassedhistoire.fr/" target="_blank" rel="noopener"><strong>La Classe d'Histoire</strong></a> · 2026 · This work is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener"><strong>Creative Commons CC BY-SA</strong></a>.`,
    licenseLabel: "View the Creative Commons CC BY-SA licence"
  }
};

const TIMELINE_PALETTES = {
  mono: {
    ink: "#222222",
    muted: "#444444",
    cardFill: "#ffffff",
    events: ["#222222"]
  },
  ocean: {
    ink: "#003049",
    muted: "#669bbc",
    cardFill: "#fdf0d5",
    events: ["#780000", "#c1121f", "#003049", "#669bbc"]
  },
  heritage: {
    ink: "#264653",
    muted: "#2a9d8f",
    cardFill: "#e9c46a",
    events: ["#264653", "#2a9d8f", "#f4a261", "#e76f51"]
  },
  forest: {
    ink: "#450920",
    muted: "#a53860",
    cardFill: "#f9dbbd",
    events: ["#ffa5ab", "#da627d", "#a53860", "#450920"]
  },
  garnet: {
    ink: "#006d77",
    muted: "#83c5be",
    cardFill: "#edf6f9",
    events: ["#006d77", "#83c5be", "#ffddd2", "#e29578"]
  },
  sage: {
    ink: "#2f3e46",
    muted: "#52796f",
    cardFill: "#cad2c5",
    events: ["#2f3e46", "#354f52", "#52796f", "#84a98c"]
  }
};

const els = {
  langToggle: document.querySelector("#langToggle"),
  themeToggle: document.querySelector("#themeToggle"),
  aboutButton: document.querySelector("#aboutButton"),
  aboutOverlay: document.querySelector("#aboutOverlay"),
  aboutClose: document.querySelector("#aboutClose"),
  title: document.querySelector("#timelineTitle"),
  subtitle: document.querySelector("#timelineSubtitle"),
  input: document.querySelector("#markersInput"),
  fileInput: document.querySelector("#fileInput"),
  sampleButton: document.querySelector("#sampleButton"),
  clearButton: document.querySelector("#clearButton"),
  pasteCleanButton: document.querySelector("#pasteCleanButton"),
  wikimediaButton: document.querySelector("#wikimediaButton"),
  removeWikimediaButton: document.querySelector("#removeWikimediaButton"),
  modeButtons: document.querySelectorAll("[data-mode]"),
  hideDates: document.querySelector("#hideDates"),
  hideTitles: document.querySelector("#hideTitles"),
  hideKeywords: document.querySelector("#hideKeywords"),
  hideImages: document.querySelector("#hideImages"),
  orientationButtons: document.querySelectorAll("[data-orientation-choice]"),
  axisDateSizeButtons: document.querySelectorAll("[data-axis-date-size]"),
  densityButtons: document.querySelectorAll("[data-density]"),
  paletteButtons: document.querySelectorAll("[data-palette]"),
  resetLayout: document.querySelector("#resetLayout"),
  exportButtons: document.querySelectorAll("[data-export-variant]"),
  status: document.querySelector("#statusBox"),
  wikimediaStatus: document.querySelector("#wikimediaStatus"),
  markerCount: document.querySelector("#markerCount"),
  sheet: document.querySelector("#sheet"),
  preview: document.querySelector("#timelinePreview")
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "fr";
let currentMode = "complete";
let currentOrientation = "landscape";
let currentDensity = "1";
let currentAxisDateSize = 15;
let currentPalette = "mono";
let visibilitySettings = {
  complete: { hideDates: false, hideTitles: false, hideKeywords: false, hideImages: false },
  blank: { hideDates: true, hideTitles: true, hideKeywords: true, hideImages: false }
};
let layoutOverrides = {};
let activeInteraction = null;

function init() {
  loadState();
  if (!els.input.value.trim()) {
    els.input.value = getSampleMarkers();
    if (currentLanguage === "en" && els.title.value === "Les grands repères de la IIIe République") {
      els.title.value = "Key milestones of the French Third Republic";
    }
  }
  bindEvents();
  applyLanguage();
  render();
}

function bindEvents() {
  const liveControls = [
    els.title,
    els.subtitle,
    els.input
  ];
  const checkboxControls = [
    els.hideDates,
    els.hideTitles,
    els.hideKeywords,
    els.hideImages
  ];

  liveControls.forEach((control) => control.addEventListener("input", update));
  checkboxControls.forEach((control) => control.addEventListener("change", () => {
    visibilitySettings[currentMode] = {
      hideDates: els.hideDates.checked,
      hideTitles: els.hideTitles.checked,
      hideKeywords: els.hideKeywords.checked,
      hideImages: els.hideImages.checked
    };
    update();
  }));

  els.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentMode = button.dataset.mode;
      els.modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      syncVisibilityControls();
      update();
    });
  });

  els.densityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentDensity = button.dataset.density;
      syncDensityButtons();
      update();
    });
  });

  els.orientationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentOrientation = button.dataset.orientationChoice;
      syncOrientationButtons();
      update();
    });
  });

  els.axisDateSizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentAxisDateSize = Number(button.dataset.axisDateSize);
      syncAxisDateSizeButtons();
      update();
    });
  });

  els.paletteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPalette = button.dataset.palette;
      syncPaletteButtons();
      update();
    });
  });

  els.themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    update();
  });
  els.langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    els.wikimediaStatus.textContent = "";
    applyLanguage();
    render();
  });
  els.aboutButton.addEventListener("click", openAbout);
  els.aboutClose.addEventListener("click", closeAbout);
  els.aboutOverlay.addEventListener("click", (event) => {
    if (event.target === els.aboutOverlay) closeAbout();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.aboutOverlay.hidden) closeAbout();
  });
  els.sampleButton.addEventListener("click", () => {
    els.input.value = getSampleMarkers();
    els.title.value = currentLanguage === "en"
      ? "Key milestones of the French Third Republic"
      : "Les grands repères de la IIIe République";
    layoutOverrides = {};
    update();
  });
  els.clearButton.addEventListener("click", () => {
    els.input.value = "";
    layoutOverrides = {};
    update();
  });
  els.pasteCleanButton.addEventListener("click", () => {
    els.input.value = parseMarkers(els.input.value).map(formatMarkerLine).join("\n");
    update();
  });
  els.wikimediaButton.addEventListener("click", addWikimediaImages);
  els.removeWikimediaButton.addEventListener("click", removeWikimediaImages);
  els.fileInput.addEventListener("change", importFile);
  els.exportButtons.forEach((button) => {
    button.addEventListener("click", () => exportTimeline(button.dataset.exportVariant, button.dataset.exportFormat));
  });
  els.resetLayout.addEventListener("click", () => {
    layoutOverrides = {};
    update();
  });
  window.addEventListener("beforeprint", updatePrintPageSize);
}

function tr(key, replacements = {}) {
  const value = translations[currentLanguage][key] ?? translations.fr[key] ?? key;
  if (typeof value !== "string") return value;
  return Object.entries(replacements).reduce(
    (text, [name, replacement]) => text.replaceAll(`{{${name}}}`, String(replacement)),
    value
  );
}

function getSampleMarkers() {
  return currentLanguage === "en" ? sampleMarkersEn : sampleMarkers;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  els.langToggle.textContent = tr("langButton");
  els.langToggle.setAttribute("aria-label", tr("langLabel"));
  els.langToggle.setAttribute("title", tr("langLabel"));
  els.aboutButton.setAttribute("aria-label", tr("information"));
  els.aboutButton.setAttribute("title", tr("information"));
  els.themeToggle.setAttribute("aria-label", tr("theme"));
  els.themeToggle.setAttribute("title", tr("theme"));
  document.querySelector(".brand-logo").alt = currentLanguage === "en" ? "La Classe d'Histoire logo" : "Logo de La Classe d'Histoire";
  document.querySelector(".subtitle").textContent = tr("subtitle");

  document.querySelectorAll(".step-title > span").forEach((label, index) => {
    label.textContent = tr("steps")[index];
  });
  document.querySelectorAll(".step-number").forEach((image, index) => {
    image.alt = currentLanguage === "en" ? `Step ${index + 1}` : `Étape ${index + 1}`;
  });

  els.sampleButton.textContent = tr("sample");
  els.clearButton.textContent = tr("clear");
  els.title.parentElement.querySelector("span").textContent = tr("titleLabel");
  els.subtitle.parentElement.querySelector("span").textContent = tr("subtitleLabel");
  els.subtitle.placeholder = tr("subtitlePlaceholder");
  els.input.parentElement.querySelector("span").textContent = tr("listLabel");
  const formatHint = document.querySelector(".format-hint");
  formatHint.querySelector("strong").textContent = tr("formatsAccepted");
  formatHint.querySelectorAll("span").forEach((line, index) => {
    line.textContent = tr("formatExamples")[index];
  });
  document.querySelector(".file-picker span").textContent = tr("importFile");
  els.pasteCleanButton.textContent = tr("cleanList");
  els.wikimediaButton.textContent = tr("addImage");
  els.removeWikimediaButton.textContent = tr("removeImages");
  document.querySelector(".image-note").textContent = tr("imageNote");

  els.modeButtons.forEach((button) => {
    button.textContent = tr(button.dataset.mode === "complete" ? "complete" : "blank");
  });
  document.querySelector(".settings-panel > .segmented").setAttribute("aria-label", tr("timelineType"));
  [[els.hideDates, "hideDates"], [els.hideTitles, "hideTitles"], [els.hideKeywords, "hideKeywords"], [els.hideImages, "hideImages"]].forEach(([input, key]) => {
    input.parentElement.lastChild.textContent = ` ${tr(key)}`;
  });
  const orientation = document.querySelector(".segmented--orientation");
  orientation.previousElementSibling.textContent = tr("orientation");
  orientation.setAttribute("aria-label", tr("orientation"));
  orientation.querySelector('[data-orientation-choice="landscape"]').textContent = tr("landscape");
  orientation.querySelector('[data-orientation-choice="portrait"]').textContent = tr("portrait");
  const density = document.querySelector(".segmented--density");
  density.previousElementSibling.textContent = tr("density");
  density.setAttribute("aria-label", tr("density"));
  density.querySelector('[data-density="0"]').textContent = tr("airy");
  density.querySelector('[data-density="1"]').textContent = tr("standard");
  const axisSize = document.querySelector(".segmented--axis-date-size");
  axisSize.previousElementSibling.textContent = tr("axisDateSize");
  axisSize.setAttribute("aria-label", tr("axisDateSize"));
  ["small", "medium", "large"].forEach((key, index) => {
    axisSize.querySelectorAll("button")[index].textContent = tr(key);
  });
  const palettes = document.querySelector(".palette-options");
  palettes.previousElementSibling.textContent = tr("palette");
  palettes.setAttribute("aria-label", tr("palette"));
  palettes.querySelector('[data-palette="mono"] > span:last-child').textContent = tr("monochrome");
  palettes.querySelectorAll(".palette-button:not([data-palette='mono']) > span:last-child").forEach((label, index) => {
    label.textContent = tr("paletteName", { number: index + 1 });
  });

  document.querySelector(".preview-help").textContent = tr("previewHelp");
  els.resetLayout.textContent = tr("resetPositions");
  document.querySelectorAll(".export-row > strong")[0].textContent = tr("completeExport");
  document.querySelectorAll(".export-row > strong")[1].textContent = tr("studentExport");
  document.querySelectorAll(".export-actions")[0].setAttribute("aria-label", tr("completeFormats"));
  document.querySelectorAll(".export-actions")[1].setAttribute("aria-label", tr("studentFormats"));

  document.querySelector("#aboutTitle").textContent = tr("aboutTitle");
  els.aboutClose.setAttribute("aria-label", tr("close"));
  els.aboutClose.setAttribute("title", tr("close"));
  const aboutParagraphs = document.querySelectorAll(".about-content p");
  aboutParagraphs[0].textContent = tr("aboutLead");
  aboutParagraphs[1].textContent = tr("aboutRole");
  aboutParagraphs[2].textContent = tr("aboutDevelopment");
  aboutParagraphs[3].innerHTML = `${escapeXml(tr("contact"))} <a href="mailto:alexandre.balet@aefe.fr"><strong>alexandre.balet@aefe.fr</strong></a>`;
  aboutParagraphs[4].textContent = tr("updated");
  document.querySelector(".site-footer p").innerHTML = tr("footerHtml");
  const licenseLink = document.querySelector(".license-icons");
  licenseLink.href = currentLanguage === "en"
    ? "https://creativecommons.org/licenses/by-sa/4.0/deed.en"
    : "https://creativecommons.org/licenses/by-sa/4.0/deed.fr";
  licenseLink.setAttribute("aria-label", tr("licenseLabel"));
}

function update() {
  saveState();
  render();
}

function openAbout() {
  els.aboutOverlay.hidden = false;
  els.aboutButton.setAttribute("aria-expanded", "true");
  els.aboutClose.focus();
}

function closeAbout() {
  els.aboutOverlay.hidden = true;
  els.aboutButton.setAttribute("aria-expanded", "false");
  els.aboutButton.focus();
}

function loadState() {
  try {
    const state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    els.title.value = state.title || els.title.value;
    els.subtitle.value = state.subtitle || "";
    els.input.value = state.input || "";
    currentMode = state.mode === "blank" ? "blank" : "complete";
    if (state.visibilitySettings && typeof state.visibilitySettings === "object") {
      visibilitySettings = {
        complete: {
          hideDates: Boolean(state.visibilitySettings.complete?.hideDates),
          hideTitles: Boolean(state.visibilitySettings.complete?.hideTitles),
          hideKeywords: Boolean(state.visibilitySettings.complete?.hideKeywords),
          hideImages: Boolean(state.visibilitySettings.complete?.hideImages)
        },
        blank: {
          hideDates: state.visibilitySettings.blank?.hideDates !== false,
          hideTitles: state.visibilitySettings.blank?.hideTitles !== false,
          hideKeywords: state.visibilitySettings.blank?.hideKeywords !== false,
          hideImages: Boolean(state.visibilitySettings.blank?.hideImages)
        }
      };
    } else {
      visibilitySettings[currentMode] = {
        hideDates: Boolean(state.hideDates),
        hideTitles: Boolean(state.hideTitles),
        hideKeywords: currentMode === "blank",
        hideImages: Boolean(state.hideImages)
      };
    }
    currentOrientation = state.orientation === "portrait" ? "portrait" : "landscape";
    currentAxisDateSize = normalizeAxisDateSize(state.axisDateSize);
    currentDensity = String(state.density) === "0" ? "0" : "1";
    currentPalette = Object.hasOwn(TIMELINE_PALETTES, state.palette) ? state.palette : "mono";
    layoutOverrides = state.layoutOverrides && typeof state.layoutOverrides === "object" ? state.layoutOverrides : {};
    document.body.classList.toggle("dark", Boolean(state.dark));
    els.modeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.mode === currentMode));
    syncVisibilityControls();
    syncOrientationButtons();
    syncDensityButtons();
    syncAxisDateSizeButtons();
    syncPaletteButtons();
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveState() {
  const state = {
    title: els.title.value,
    subtitle: els.subtitle.value,
    input: els.input.value,
    mode: currentMode,
    visibilitySettings,
    orientation: currentOrientation,
    axisDateSize: currentAxisDateSize,
    density: currentDensity,
    palette: currentPalette,
    layoutOverrides,
    dark: document.body.classList.contains("dark")
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function syncDensityButtons() {
  els.densityButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.density === currentDensity);
  });
}

function syncOrientationButtons() {
  els.orientationButtons.forEach((button) => {
    const isActive = button.dataset.orientationChoice === currentOrientation;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function syncAxisDateSizeButtons() {
  els.axisDateSizeButtons.forEach((button) => {
    const isActive = Number(button.dataset.axisDateSize) === currentAxisDateSize;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function normalizeAxisDateSize(value) {
  const numericValue = clamp(Number(value) || 15, 15, 24);
  return [15, 19, 24].reduce((closest, size) => (
    Math.abs(size - numericValue) < Math.abs(closest - numericValue) ? size : closest
  ), 15);
}

function syncVisibilityControls() {
  const settings = visibilitySettings[currentMode];
  els.hideDates.checked = settings.hideDates;
  els.hideTitles.checked = settings.hideTitles;
  els.hideKeywords.checked = settings.hideKeywords;
  els.hideImages.checked = settings.hideImages;
}

function syncPaletteButtons() {
  els.paletteButtons.forEach((button) => {
    const isActive = button.dataset.palette === currentPalette;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function parseMarkers(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    try {
      const data = JSON.parse(trimmed);
      const rows = Array.isArray(data) ? data : data.markers;
      if (Array.isArray(rows)) {
        return rows.map(normalizeObjectMarker).filter(Boolean).sort(sortByStart);
      }
    } catch {
      // The text will be parsed line by line below.
    }
  }

  return trimmed
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map(parseMarkerLine)
    .filter(Boolean)
    .sort(sortByStart);
}

function parseMarkerLine(line) {
  const cleaned = line.replace(/\t/g, " ; ").replace(/\s{2,}/g, " ");
  const parts = cleaned.includes(";") || cleaned.includes("|")
    ? cleaned.split(/[;|]/).map((part) => part.trim())
    : cleaned.split(/\s[:,-]\s/).map((part) => part.trim());

  if (parts.length < 2) return null;
  const date = parts.shift();
  const range = parseDateRange(date);
  if (!range) return null;

  const title = parts.shift() || tr("defaultMarker");
  const imageIndex = parts.findIndex(isImageReference);
  const image = imageIndex >= 0 ? normalizeWikimediaImage(parts.splice(imageIndex, 1)[0]) : "";
  const keywords = parts.join(" ; ").trim();

  return {
    date: date.trim(),
    start: range.start,
    end: range.end,
    title,
    keywords,
    image
  };
}

function normalizeObjectMarker(item) {
  if (!item || typeof item !== "object") return null;
  const date = String(item.date || item.periode || item.period || item.start || "").trim();
  const range = parseDateRange(item.end ? `${date}-${item.end}` : date);
  if (!range) return null;
  const rawKeywords = item.keywords || item.motsCles || item.mots_cles || item.tags || "";
  return {
    date,
    start: range.start,
    end: range.end,
    title: String(item.title || item.titre || item.label || tr("defaultMarker")).trim(),
    keywords: Array.isArray(rawKeywords) ? rawKeywords.join(", ") : String(rawKeywords).trim(),
    image: normalizeWikimediaImage(item.image || item.imageUrl || item.wikimedia || "")
  };
}

function parseDateRange(value) {
  const normalized = String(value)
    .replace(/\bav\.?\s?j\.?-?c\.?/gi, " av. J.-C.")
    .replace(/\bavant\s+jésus-?christ\b/gi, " av. J.-C.")
    .trim();
  const years = [...normalized.matchAll(/\d{1,5}/g)].map((match) => Number(match[0]));
  if (!years.length) return null;
  const isBce = /av\.?\s*j/i.test(normalized) || /avant/i.test(normalized) || /\b(?:bc|bce)\b/i.test(normalized);

  const normalizedLower = normalized.toLocaleLowerCase("fr-FR");
  const hasCalendarMonth = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ].some((month) => normalizedLower.includes(month));

  if (hasCalendarMonth) {
    const year = years[years.length - 1];
    const signedYear = isBce && year > 0 ? -year : year;
    return { start: signedYear, end: signedYear };
  }

  const signed = years.map((year) => (isBce && year > 0 ? -year : year));
  return {
    start: signed[0],
    end: signed[1] ?? signed[0]
  };
}

function sortByStart(a, b) {
  return a.start - b.start || a.end - b.end || a.title.localeCompare(b.title, "fr");
}

function formatMarkerLine(marker) {
  return [marker.date, marker.title, marker.keywords, marker.image].filter(Boolean).join(" ; ");
}

function render() {
  const markers = parseMarkers(els.input.value);
  els.sheet.classList.toggle("is-portrait", currentOrientation === "portrait");
  els.markerCount.textContent = `${markers.length} ${tr(markers.length > 1 ? "markerPlural" : "markerSingular")}`;
  els.status.innerHTML = markers.length
    ? `<img class="celebration-icon" src="assets/icons/celebration.svg" alt="" aria-hidden="true">${escapeXml(tr("ready"))}`
    : tr("needMarkers");

  if (!markers.length) {
    els.preview.innerHTML = `<p class="empty-state">${escapeXml(tr("empty"))}</p>`;
    return;
  }

  els.preview.innerHTML = `
    <article class="preview-pane preview-pane--teacher">
      <div class="preview-pane-head">
        <h3>${escapeXml(tr("teacherTimeline"))}</h3>
      </div>
      ${buildTimelineSvg(markers, { variant: "teacher", draggable: true })}
    </article>
    <article class="preview-pane preview-pane--student">
      <div class="preview-pane-head">
        <h3>${escapeXml(tr("studentTimeline"))}</h3>
      </div>
      ${buildTimelineSvg(markers, { variant: "student", draggable: false })}
    </article>`;
  bindTimelineDrag();
}

function buildTimelineSvg(markers, options = {}) {
  if (currentOrientation === "portrait") {
    return buildVerticalTimelineSvg(markers, options);
  }
  const variant = options.variant || currentMode;
  const draggable = options.draggable !== false;
  const density = Number(currentDensity);
  const palette = TIMELINE_PALETTES[currentPalette] || TIMELINE_PALETTES.mono;
  const axisDateFontSize = currentAxisDateSize;
  const width = 1180;
  const cardWidth = getTimelineCardWidth(density);
  const horizontalMargin = Math.ceil(cardWidth / 2) + 28;
  const margin = { left: horizontalMargin + 36, right: horizontalMargin, top: 118, bottom: 88 };
  const labelVisibility = getLabelVisibility(variant);
  const cardMetrics = markers.map((marker) => getCardTextMetrics(marker, FULL_LABEL_VISIBILITY, cardWidth));
  const cardHeight = Math.max(...cardMetrics.map((metric) => metric.height));
  const height = Math.max(680, 360 + markers.length * Math.max(50, cardHeight * 0.55)) + 28;
  const axisY = Math.round(height * 0.48);
  const minYear = Math.min(...markers.map((marker) => marker.start));
  const maxYear = Math.max(...markers.map((marker) => marker.end));
  const paddedMin = minYear === maxYear ? minYear - 5 : minYear;
  const paddedMax = minYear === maxYear ? maxYear + 5 : maxYear;
  const positions = getPositions(markers, paddedMin, paddedMax, width, margin);
  const title = escapeXml(els.title.value.trim() || tr("defaultTimelineTitle"));
  const subtitle = escapeXml(els.subtitle.value.trim());
  const ticks = getTicks(paddedMin, paddedMax, width, margin);
  const lanes = distributeLanes(markers, positions, axisY, density, width, cardWidth, cardHeight);
  const filterId = `printImage-${variant}`;
  const arrowTipX = width - margin.right + 36;
  const arrowBaseX = arrowTipX - 24;
  const hasVisibleImages = labelVisibility.images && markers.some((marker) => marker.image);
  const timelineCredit = `<text x="${width - 22}" y="${height - 18}" text-anchor="end" fill="${palette.muted}" font-family="Source Sans Pro, sans-serif" font-size="13"><tspan class="timeline-export-credit">${escapeXml(tr("creatorCredit"))}${hasVisibleImages ? " · " : ""}</tspan>${hasVisibleImages ? `<tspan>${escapeXml(tr("commonsCredit"))}</tspan>` : ""}</text>`;
  const eventLayers = markers.map((marker, index) => {
    const key = markerKey(marker);
    const clipId = imageClipId(marker, index, variant);
    const isDuration = marker.end > marker.start;
    const periodRange = isDuration ? applyPeriodOverride(positions[index], key, width, margin) : positions[index];
    const x1 = periodRange.start;
    const x2 = periodRange.end;
    const x = (x1 + x2) / 2;
    const lane = applyLayoutOverride(lanes[index], key, width, height);
    const metric = getCardTextMetrics(marker, labelVisibility, lane.cardWidth);
    lane.cardHeight = Math.max(lane.cardHeight, metric.height);
    const cardY = lane.y;
    const connectorEnd = getRectangleEdgePoint(x, axisY, lane.x, cardY, lane.cardWidth, lane.cardHeight);
    const tone = palette.events[index % palette.events.length];
    const connector = `<line class="marker-connector" data-key="${escapeXml(key)}" data-anchor-x="${x}" data-axis-y="${axisY}" x1="${x}" y1="${axisY}" x2="${connectorEnd.x}" y2="${connectorEnd.y}" stroke="${tone}" stroke-width="2"/>`;
    const bubbleX = lane.x + 36;
    const bubbleY = cardY + lane.cardHeight / 2;
    const imageBubble = labelVisibility.images && marker.image
      ? `<clipPath id="${clipId}">
          <circle class="timeline-image-clip" cx="${bubbleX}" cy="${bubbleY}" r="24"/>
        </clipPath>
        <image class="timeline-image-bubble" href="${escapeXml(marker.image)}" x="${bubbleX - 24}" y="${bubbleY - 24}" width="48" height="48" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" filter="url(#${filterId})"/>
        <circle class="timeline-image-frame" cx="${bubbleX}" cy="${bubbleY}" r="27" fill="none" stroke="${tone}" stroke-width="2"/>`
      : "";
    const textX = lane.x + metric.textOffset + 14;
    const dateY = cardY + Math.max(24, Math.round((lane.cardHeight - metric.textHeight) / 2) + 18);
    const titleY = dateY + metric.dateLines.length * 20 + metric.titleGap;
    const keywordsY = titleY + metric.titleLines.length * 20 + metric.keywordGap;
    const resizeHandle = draggable
      ? `<rect class="timeline-resize-handle" x="${lane.x + lane.cardWidth - 18}" y="${cardY + lane.cardHeight - 18}" width="14" height="14" rx="3" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="2"/>
        <line class="timeline-resize-handle timeline-resize-mark" x1="${lane.x + lane.cardWidth - 15}" y1="${cardY + lane.cardHeight - 6}" x2="${lane.x + lane.cardWidth - 6}" y2="${cardY + lane.cardHeight - 15}" stroke="${tone}" stroke-width="1.5"/>`
      : "";

    const periodMark = isDuration
      ? `<g class="timeline-period" data-key="${escapeXml(key)}" data-orientation="horizontal" data-min="${margin.left}" data-max="${width - margin.right}" data-start-x="${x1}" data-end-x="${x2}">
          <rect class="timeline-period-bar" x="${x1}" y="${axisY - 7}" width="${Math.max(18, x2 - x1)}" height="14" rx="7" fill="${tone}"/>
          ${draggable ? `<circle class="timeline-period-handle" data-edge="start" cx="${x1}" cy="${axisY}" r="9" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="3" aria-label="${escapeXml(tr("resizeStart", { title: marker.title }))}"/>
          <circle class="timeline-period-handle" data-edge="end" cx="${x2}" cy="${axisY}" r="9" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="3" aria-label="${escapeXml(tr("resizeEnd", { title: marker.title }))}"/>` : ""}
        </g>`
      : `<circle cx="${x}" cy="${axisY}" r="7" fill="${tone}"/>`;

    return {
      underlay: `${periodMark}${connector}`,
      card: `<g class="timeline-card-node" data-key="${escapeXml(key)}" data-x="${lane.x}" data-y="${cardY}" data-width="${lane.cardWidth}" data-height="${lane.cardHeight}" data-anchor-x="${x}" ${draggable ? `tabindex="0" role="button" aria-label="${escapeXml(tr("moveCard", { title: marker.title }))}"` : `aria-hidden="true"`}>
        <rect x="${lane.x}" y="${cardY}" width="${lane.cardWidth}" height="${lane.cardHeight}" rx="10" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="2"/>
        ${imageBubble}
        ${labelVisibility.dates
          ? svgTextBlock(metric.dateLines, textX, dateY, 20, `fill="${palette.ink}" font-family="Poppins, sans-serif" font-size="18" font-weight="800"`)
          : ""}
        ${labelVisibility.titles
          ? svgTextBlock(metric.titleLines, textX, titleY, 20, `fill="${palette.ink}" font-family="Poppins, sans-serif" font-size="17" font-weight="800"`)
          : ""}
        ${metric.keywordLines.length
          ? svgTextBlock(metric.keywordLines, textX, keywordsY, 17, `class="timeline-keywords" fill="${palette.muted}" font-family="Source Sans Pro, sans-serif" font-size="14" font-weight="400"`)
          : ""}
        ${resizeHandle}
      </g>`
    };
  });
  const events = `${eventLayers.map((layer) => layer.underlay).join("")}${eventLayers.map((layer) => layer.card).join("")}`;

  return `
    <svg class="timeline-svg" data-variant="${escapeXml(variant)}" data-orientation="horizontal" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}${subtitle ? ` - ${subtitle}` : ""}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="${filterId}">
          <feColorMatrix type="saturate" values="0"/>
        </filter>
      </defs>
      <rect width="${width}" height="${height}" fill="#ffffff"/>
      <text x="${width / 2}" y="56" text-anchor="middle" fill="${palette.ink}" font-family="Poppins, sans-serif" font-size="34" font-weight="900">${truncateSvg(title, 54)}</text>
      ${subtitle ? `<text x="${width / 2}" y="88" text-anchor="middle" fill="${palette.muted}" font-family="Source Sans Pro, sans-serif" font-size="19" font-weight="700">${truncateSvg(subtitle, 82)}</text>` : ""}
      <line class="timeline-axis" x1="${margin.left - 32}" y1="${axisY}" x2="${arrowBaseX}" y2="${axisY}" stroke="${palette.ink}" stroke-width="5" stroke-linecap="round"/>
      ${ticks.map((tick) => `<g><line x1="${tick.x}" y1="${axisY - 13}" x2="${tick.x}" y2="${axisY + 13}" stroke="${palette.ink}" stroke-width="2"/><text x="${tick.x}" y="${axisY + 24 + axisDateFontSize}" text-anchor="middle" fill="${palette.muted}" font-family="Source Sans Pro, sans-serif" font-size="${axisDateFontSize}" font-weight="800">${formatYear(tick.year)}</text></g>`).join("")}
      ${events}
      <path class="timeline-axis-arrow" d="M ${arrowBaseX} ${axisY - 13} L ${arrowTipX} ${axisY} L ${arrowBaseX} ${axisY + 13} Z" fill="${palette.ink}"/>
      ${timelineCredit}
    </svg>`;
}

function buildVerticalTimelineSvg(markers, options = {}) {
  const variant = options.variant || currentMode;
  const draggable = options.draggable !== false;
  const density = Number(currentDensity);
  const palette = TIMELINE_PALETTES[currentPalette] || TIMELINE_PALETTES.mono;
  const axisDateFontSize = currentAxisDateSize;
  const width = 860;
  const cardWidth = getVerticalTimelineCardWidth(density);
  const margin = { top: getAutomaticCardMinimumY("vertical"), bottom: 86, left: 42, right: 42 };
  const labelVisibility = getLabelVisibility(variant);
  const cardMetrics = markers.map((marker) => getCardTextMetrics(marker, FULL_LABEL_VISIBILITY, cardWidth));
  const cardHeight = Math.max(...cardMetrics.map((metric) => metric.height));
  const gapY = [28, 22][density];
  const height = Math.max(1180, 270 + Math.ceil(markers.length / 2) * (cardHeight + gapY));
  const axisX = width / 2;
  const minYear = Math.min(...markers.map((marker) => marker.start));
  const maxYear = Math.max(...markers.map((marker) => marker.end));
  const paddedMin = minYear === maxYear ? minYear - 5 : minYear;
  const paddedMax = minYear === maxYear ? maxYear + 5 : maxYear;
  const positions = getVerticalPositions(markers, paddedMin, paddedMax, height, margin);
  const title = escapeXml(els.title.value.trim() || tr("defaultTimelineTitle"));
  const subtitle = escapeXml(els.subtitle.value.trim());
  const ticks = getVerticalTicks(paddedMin, paddedMax, height, margin);
  const lanes = distributeVerticalLanes(markers, positions, axisX, density, width, height, cardWidth, cardHeight, margin);
  const filterId = `printImage-${variant}`;
  const arrowTipY = height - margin.bottom + 38;
  const arrowBaseY = arrowTipY - 26;
  const hasVisibleImages = labelVisibility.images && markers.some((marker) => marker.image);
  const timelineCredit = `<text x="${width - 22}" y="${height - 18}" text-anchor="end" fill="${palette.muted}" font-family="Source Sans Pro, sans-serif" font-size="13"><tspan class="timeline-export-credit">${escapeXml(tr("creatorCredit"))}${hasVisibleImages ? " · " : ""}</tspan>${hasVisibleImages ? `<tspan>${escapeXml(tr("commonsCredit"))}</tspan>` : ""}</text>`;

  const eventLayers = markers.map((marker, index) => {
    const key = markerKey(marker);
    const clipId = imageClipId(marker, index, variant);
    const isDuration = marker.end > marker.start;
    const periodRange = isDuration ? applyVerticalPeriodOverride(positions[index], key, height, margin) : positions[index];
    const y1 = periodRange.start;
    const y2 = periodRange.end;
    const anchorY = (y1 + y2) / 2;
    const lane = applyLayoutOverride(lanes[index], key, width, height, "vertical");
    const metric = getCardTextMetrics(marker, labelVisibility, lane.cardWidth);
    lane.cardHeight = Math.max(lane.cardHeight, metric.height);
    const cardY = lane.y;
    const connectorEnd = getRectangleEdgePoint(axisX, anchorY, lane.x, cardY, lane.cardWidth, lane.cardHeight);
    const tone = palette.events[index % palette.events.length];
    const connector = `<line class="marker-connector" data-key="${escapeXml(key)}" data-orientation="vertical" data-anchor-y="${anchorY}" data-axis-x="${axisX}" x1="${axisX}" y1="${anchorY}" x2="${connectorEnd.x}" y2="${connectorEnd.y}" stroke="${tone}" stroke-width="2"/>`;
    const bubbleX = lane.x + 36;
    const bubbleY = cardY + lane.cardHeight / 2;
    const imageBubble = labelVisibility.images && marker.image
      ? `<clipPath id="${clipId}">
          <circle class="timeline-image-clip" cx="${bubbleX}" cy="${bubbleY}" r="24"/>
        </clipPath>
        <image class="timeline-image-bubble" href="${escapeXml(marker.image)}" x="${bubbleX - 24}" y="${bubbleY - 24}" width="48" height="48" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" filter="url(#${filterId})"/>
        <circle class="timeline-image-frame" cx="${bubbleX}" cy="${bubbleY}" r="27" fill="none" stroke="${tone}" stroke-width="2"/>`
      : "";
    const textX = lane.x + metric.textOffset + 14;
    const dateY = cardY + Math.max(24, Math.round((lane.cardHeight - metric.textHeight) / 2) + 18);
    const titleY = dateY + metric.dateLines.length * 20 + metric.titleGap;
    const keywordsY = titleY + metric.titleLines.length * 20 + metric.keywordGap;
    const resizeHandle = draggable
      ? `<rect class="timeline-resize-handle" x="${lane.x + lane.cardWidth - 18}" y="${cardY + lane.cardHeight - 18}" width="14" height="14" rx="3" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="2"/>
        <line class="timeline-resize-handle timeline-resize-mark" x1="${lane.x + lane.cardWidth - 15}" y1="${cardY + lane.cardHeight - 6}" x2="${lane.x + lane.cardWidth - 6}" y2="${cardY + lane.cardHeight - 15}" stroke="${tone}" stroke-width="1.5"/>`
      : "";
    const periodMark = isDuration
      ? `<g class="timeline-period timeline-period--vertical" data-key="${escapeXml(key)}" data-orientation="vertical" data-min="${margin.top}" data-max="${height - margin.bottom}" data-start-y="${y1}" data-end-y="${y2}">
          <rect class="timeline-period-bar" x="${axisX - 7}" y="${y1}" width="14" height="${Math.max(18, y2 - y1)}" rx="7" fill="${tone}"/>
          ${draggable ? `<circle class="timeline-period-handle" data-edge="start" cx="${axisX}" cy="${y1}" r="9" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="3" aria-label="${escapeXml(tr("resizeStart", { title: marker.title }))}"/>
          <circle class="timeline-period-handle" data-edge="end" cx="${axisX}" cy="${y2}" r="9" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="3" aria-label="${escapeXml(tr("resizeEnd", { title: marker.title }))}"/>` : ""}
        </g>`
      : `<circle cx="${axisX}" cy="${anchorY}" r="7" fill="${tone}"/>`;

    return {
      underlay: `${periodMark}${connector}`,
      card: `<g class="timeline-card-node" data-key="${escapeXml(key)}" data-x="${lane.x}" data-y="${cardY}" data-width="${lane.cardWidth}" data-height="${lane.cardHeight}" data-anchor-y="${anchorY}" ${draggable ? `tabindex="0" role="button" aria-label="${escapeXml(tr("moveCard", { title: marker.title }))}"` : `aria-hidden="true"`}>
        <rect x="${lane.x}" y="${cardY}" width="${lane.cardWidth}" height="${lane.cardHeight}" rx="10" fill="${palette.cardFill || "#ffffff"}" stroke="${tone}" stroke-width="2"/>
        ${imageBubble}
        ${labelVisibility.dates
          ? svgTextBlock(metric.dateLines, textX, dateY, 20, `fill="${palette.ink}" font-family="Poppins, sans-serif" font-size="18" font-weight="800"`)
          : ""}
        ${labelVisibility.titles
          ? svgTextBlock(metric.titleLines, textX, titleY, 20, `fill="${palette.ink}" font-family="Poppins, sans-serif" font-size="17" font-weight="800"`)
          : ""}
        ${metric.keywordLines.length
          ? svgTextBlock(metric.keywordLines, textX, keywordsY, 17, `class="timeline-keywords" fill="${palette.muted}" font-family="Source Sans Pro, sans-serif" font-size="14" font-weight="400"`)
          : ""}
        ${resizeHandle}
      </g>`
    };
  });
  const events = `${eventLayers.map((layer) => layer.underlay).join("")}${eventLayers.map((layer) => layer.card).join("")}`;

  return `
    <svg class="timeline-svg timeline-svg--vertical" data-variant="${escapeXml(variant)}" data-orientation="vertical" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}${subtitle ? ` - ${subtitle}` : ""}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="${filterId}">
          <feColorMatrix type="saturate" values="0"/>
        </filter>
      </defs>
      <rect width="${width}" height="${height}" fill="#ffffff"/>
      <text x="${width / 2}" y="56" text-anchor="middle" fill="${palette.ink}" font-family="Poppins, sans-serif" font-size="32" font-weight="900">${truncateSvg(title, 42)}</text>
      ${subtitle ? `<text x="${width / 2}" y="88" text-anchor="middle" fill="${palette.muted}" font-family="Source Sans Pro, sans-serif" font-size="18" font-weight="700">${truncateSvg(subtitle, 58)}</text>` : ""}
      <line class="timeline-axis" x1="${axisX}" y1="${margin.top - 32}" x2="${axisX}" y2="${arrowBaseY}" stroke="${palette.ink}" stroke-width="5" stroke-linecap="round"/>
      ${ticks.map((tick) => `<g><line x1="${axisX - 13}" y1="${tick.y}" x2="${axisX + 13}" y2="${tick.y}" stroke="${palette.ink}" stroke-width="2"/><text x="${axisX - 19}" y="${tick.y + axisDateFontSize * 0.34}" text-anchor="end" fill="${palette.muted}" stroke="#ffffff" stroke-width="5" paint-order="stroke" font-family="Source Sans Pro, sans-serif" font-size="${axisDateFontSize}" font-weight="800">${formatYear(tick.year)}</text></g>`).join("")}
      ${events}
      <path class="timeline-axis-arrow" d="M ${axisX - 13} ${arrowBaseY} L ${axisX} ${arrowTipY} L ${axisX + 13} ${arrowBaseY} Z" fill="${palette.ink}"/>
      ${timelineCredit}
    </svg>`;
}

function applyLayoutOverride(lane, key, width, height, orientation = "horizontal") {
  const saved = layoutOverrides[key] || {};
  const isVertical = orientation === "vertical";
  const savedWidth = isVertical ? saved.verticalWidth : saved.width;
  const savedHeight = isVertical ? saved.verticalHeight : saved.height;
  const savedX = isVertical ? saved.verticalX : saved.x;
  const savedY = isVertical ? saved.verticalY : saved.y;
  const cardWidth = clamp(Number(savedWidth) || lane.cardWidth, 210, width - 40);
  const cardHeight = clamp(Number(savedHeight) || lane.cardHeight, 64, height - 120);
  const hasSavedPosition = Number.isFinite(Number(savedY));
  const minimumY = hasSavedPosition
    ? getCardDragMinimumY(orientation)
    : getAutomaticCardMinimumY(orientation);
  return {
    ...lane,
    cardWidth,
    cardHeight,
    x: clamp(Number(savedX) || lane.x, 20, width - cardWidth - 20),
    y: clamp(hasSavedPosition ? Number(savedY) : lane.y, minimumY, height - cardHeight - 24)
  };
}

function getAutomaticCardMinimumY(orientation = "horizontal") {
  const hasSubtitle = Boolean(els.subtitle.value.trim());
  if (orientation === "vertical") return hasSubtitle ? 210 : 150;
  return hasSubtitle ? 190 : 96;
}

function getCardDragMinimumY() {
  return els.subtitle.value.trim() ? 112 : 96;
}

function applyPeriodOverride(position, key, width, margin) {
  const saved = layoutOverrides[key] || {};
  const savedStart = Number(saved.periodStartX);
  const savedEnd = Number(saved.periodEndX);
  const start = Number.isFinite(savedStart) ? savedStart : position.start;
  const end = Number.isFinite(savedEnd) ? savedEnd : position.end;
  return {
    start: clamp(Math.min(start, end - 18), margin.left, width - margin.right - 18),
    end: clamp(Math.max(end, start + 18), margin.left + 18, width - margin.right)
  };
}

function applyVerticalPeriodOverride(position, key, height, margin) {
  const saved = layoutOverrides[key] || {};
  const savedStart = Number(saved.periodStartY);
  const savedEnd = Number(saved.periodEndY);
  const start = Number.isFinite(savedStart) ? savedStart : position.start;
  const end = Number.isFinite(savedEnd) ? savedEnd : position.end;
  return {
    start: clamp(Math.min(start, end - 18), margin.top, height - margin.bottom - 18),
    end: clamp(Math.max(end, start + 18), margin.top + 18, height - margin.bottom)
  };
}

function bindTimelineDrag() {
  els.preview.querySelectorAll('svg.timeline-svg[data-variant="teacher"]').forEach((svg) => {
    svg.addEventListener("pointerdown", startTimelineDrag);
    svg.addEventListener("keydown", moveTimelineCardWithKeyboard);
  });
}

function startTimelineDrag(event) {
  const periodHandle = event.target.closest(".timeline-period-handle");
  if (periodHandle) {
    startTimelinePeriodResize(event, periodHandle);
    return;
  }
  const card = event.target.closest(".timeline-card-node");
  if (!card) return;
  const svg = card.ownerSVGElement;
  const pointer = getSvgPointer(svg, event);
  const isResize = Boolean(event.target.closest(".timeline-resize-handle"));
  activeInteraction = {
    mode: isResize ? "resize" : "move",
    svg,
    card,
    key: card.dataset.key,
    startX: Number(card.dataset.x),
    startY: Number(card.dataset.y),
    width: Number(card.dataset.width),
    height: Number(card.dataset.height),
    offsetX: pointer.x - Number(card.dataset.x),
    offsetY: pointer.y - Number(card.dataset.y),
    pointerX: pointer.x,
    pointerY: pointer.y
  };
  card.classList.add(isResize ? "is-resizing" : "is-dragging");
  card.setPointerCapture(event.pointerId);
  card.addEventListener("pointermove", moveTimelineCard);
  card.addEventListener("pointerup", stopTimelineDrag);
  card.addEventListener("pointercancel", stopTimelineDrag);
}

function startTimelinePeriodResize(event, handle) {
  const period = handle.closest(".timeline-period");
  const svg = period.ownerSVGElement;
  const isVertical = period.dataset.orientation === "vertical";
  activeInteraction = {
    mode: `period-${handle.dataset.edge}`,
    svg,
    period,
    handle,
    key: period.dataset.key,
    isVertical,
    startCoord: Number(isVertical ? period.dataset.startY : period.dataset.startX),
    endCoord: Number(isVertical ? period.dataset.endY : period.dataset.endX),
    minCoord: Number(period.dataset.min),
    maxCoord: Number(period.dataset.max)
  };
  period.classList.add("is-resizing");
  handle.setPointerCapture(event.pointerId);
  handle.addEventListener("pointermove", moveTimelinePeriod);
  handle.addEventListener("pointerup", stopTimelinePeriodResize);
  handle.addEventListener("pointercancel", stopTimelinePeriodResize);
}

function moveTimelinePeriod(event) {
  if (!activeInteraction || !activeInteraction.mode.startsWith("period-")) return;
  const pointer = getSvgPointer(activeInteraction.svg, event);
  const pointerCoord = activeInteraction.isVertical ? pointer.y : pointer.x;
  let startCoord = activeInteraction.startCoord;
  let endCoord = activeInteraction.endCoord;

  if (activeInteraction.mode === "period-start") {
    startCoord = clamp(pointerCoord, activeInteraction.minCoord, endCoord - 18);
  } else {
    endCoord = clamp(pointerCoord, startCoord + 18, activeInteraction.maxCoord);
  }
  setPeriodRange(activeInteraction.svg, activeInteraction.period, activeInteraction.key, startCoord, endCoord);
}

function stopTimelinePeriodResize(event) {
  if (!activeInteraction || !activeInteraction.mode.startsWith("period-")) return;
  const { period, handle, key } = activeInteraction;
  period.classList.remove("is-resizing");
  handle.releasePointerCapture(event.pointerId);
  handle.removeEventListener("pointermove", moveTimelinePeriod);
  handle.removeEventListener("pointerup", stopTimelinePeriodResize);
  handle.removeEventListener("pointercancel", stopTimelinePeriodResize);
  const isVertical = period.dataset.orientation === "vertical";
  const periodOverride = isVertical
    ? { periodStartY: Math.round(Number(period.dataset.startY)), periodEndY: Math.round(Number(period.dataset.endY)) }
    : { periodStartX: Math.round(Number(period.dataset.startX)), periodEndX: Math.round(Number(period.dataset.endX)) };
  layoutOverrides[key] = { ...(layoutOverrides[key] || {}), ...periodOverride };
  activeInteraction = null;
  saveState();
  render();
  els.status.textContent = tr("periodAdjusted");
}

function moveTimelineCard(event) {
  if (!activeInteraction) return;
  const pointer = getSvgPointer(activeInteraction.svg, event);
  const box = getSvgBox(activeInteraction.svg);

  if (activeInteraction.mode === "resize") {
    const nextWidth = clamp(activeInteraction.width + pointer.x - activeInteraction.pointerX, 210, box.width - activeInteraction.startX - 20);
    const nextHeight = clamp(activeInteraction.height + pointer.y - activeInteraction.pointerY, 64, box.height - activeInteraction.startY - 24);
    setCardSize(activeInteraction.card, nextWidth, nextHeight);
    updateConnector(activeInteraction.svg, activeInteraction.key, activeInteraction.startX, activeInteraction.startY, nextWidth, nextHeight);
    return;
  }

  const nextX = clamp(pointer.x - activeInteraction.offsetX, 20, box.width - activeInteraction.width - 20);
  const nextY = clamp(pointer.y - activeInteraction.offsetY, getCardDragMinimumY(), box.height - activeInteraction.height - 24);
  setCardPosition(activeInteraction.card, nextX, nextY);
  updateConnector(activeInteraction.svg, activeInteraction.key, nextX, nextY, activeInteraction.width, activeInteraction.height);
}

function stopTimelineDrag(event) {
  if (!activeInteraction) return;
  const { card, key, svg } = activeInteraction;
  card.classList.remove("is-dragging");
  card.classList.remove("is-resizing");
  card.releasePointerCapture(event.pointerId);
  card.removeEventListener("pointermove", moveTimelineCard);
  card.removeEventListener("pointerup", stopTimelineDrag);
  card.removeEventListener("pointercancel", stopTimelineDrag);
  saveCardLayoutOverride(key, card, svg.dataset.orientation === "vertical");
  activeInteraction = null;
  saveState();
  render();
  els.status.textContent = tr("layoutSaved");
}

function moveTimelineCardWithKeyboard(event) {
  const card = event.target.closest(".timeline-card-node");
  if (!card || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
  event.preventDefault();
  const svg = card.ownerSVGElement;
  const box = getSvgBox(svg);
  const step = event.shiftKey ? 24 : 8;
  const width = Number(card.dataset.width);
  const height = Number(card.dataset.height);
  const deltas = {
    ArrowLeft: [-step, 0],
    ArrowRight: [step, 0],
    ArrowUp: [0, -step],
    ArrowDown: [0, step]
  };
  const [dx, dy] = deltas[event.key];
  const nextX = clamp(Number(card.dataset.x) + dx, 20, box.width - width - 20);
  const nextY = clamp(Number(card.dataset.y) + dy, getCardDragMinimumY(), box.height - height - 24);
  setCardPosition(card, nextX, nextY);
  updateConnector(svg, card.dataset.key, nextX, nextY, width, height);
  saveCardLayoutOverride(card.dataset.key, card, svg.dataset.orientation === "vertical");
  saveState();
}

function saveCardLayoutOverride(key, card, isVertical) {
  const values = isVertical
    ? {
        verticalX: Math.round(Number(card.dataset.x)),
        verticalY: Math.round(Number(card.dataset.y)),
        verticalWidth: Math.round(Number(card.dataset.width)),
        verticalHeight: Math.round(Number(card.dataset.height))
      }
    : {
        x: Math.round(Number(card.dataset.x)),
        y: Math.round(Number(card.dataset.y)),
        width: Math.round(Number(card.dataset.width)),
        height: Math.round(Number(card.dataset.height))
      };
  layoutOverrides[key] = { ...(layoutOverrides[key] || {}), ...values };
}

function setCardPosition(card, x, y) {
  const previousX = Number(card.dataset.x);
  const previousY = Number(card.dataset.y);
  const dx = x - previousX;
  const dy = y - previousY;
  card.dataset.x = String(x);
  card.dataset.y = String(y);
  card.querySelectorAll("rect, text, tspan, image").forEach((node) => {
    if (node.hasAttribute("x")) node.setAttribute("x", Number(node.getAttribute("x")) + dx);
    if (node.hasAttribute("y")) node.setAttribute("y", Number(node.getAttribute("y")) + dy);
  });
  card.querySelectorAll("circle").forEach((node) => {
    if (node.hasAttribute("cx")) node.setAttribute("cx", Number(node.getAttribute("cx")) + dx);
    if (node.hasAttribute("cy")) node.setAttribute("cy", Number(node.getAttribute("cy")) + dy);
  });
  card.querySelectorAll(".timeline-resize-mark").forEach((node) => {
    ["x1", "x2"].forEach((attribute) => node.setAttribute(attribute, Number(node.getAttribute(attribute)) + dx));
    ["y1", "y2"].forEach((attribute) => node.setAttribute(attribute, Number(node.getAttribute(attribute)) + dy));
  });
}

function setCardSize(card, width, height) {
  const x = Number(card.dataset.x);
  const y = Number(card.dataset.y);
  const mainRect = card.querySelector("rect:not(.timeline-resize-handle)");
  const handle = card.querySelector("rect.timeline-resize-handle");
  const mark = card.querySelector(".timeline-resize-mark");
  const image = card.querySelector(".timeline-image-bubble");
  const imageClip = card.querySelector(".timeline-image-clip");
  const imageFrame = card.querySelector(".timeline-image-frame");
  const bubbleX = x + 36;
  const bubbleY = y + height / 2;

  card.dataset.width = String(width);
  card.dataset.height = String(height);
  if (mainRect) {
    mainRect.setAttribute("width", width);
    mainRect.setAttribute("height", height);
  }
  if (handle) {
    handle.setAttribute("x", x + width - 18);
    handle.setAttribute("y", y + height - 18);
  }
  if (mark) {
    mark.setAttribute("x1", x + width - 15);
    mark.setAttribute("y1", y + height - 6);
    mark.setAttribute("x2", x + width - 6);
    mark.setAttribute("y2", y + height - 15);
  }
  if (image) {
    image.setAttribute("x", bubbleX - 24);
    image.setAttribute("y", bubbleY - 24);
  }
  [imageClip, imageFrame].filter(Boolean).forEach((circle) => {
    circle.setAttribute("cx", bubbleX);
    circle.setAttribute("cy", bubbleY);
  });
}

function updateConnector(svg, key, x, y, width, height) {
  const connector = svg.querySelector(`.marker-connector[data-key="${cssEscape(key)}"]`);
  if (!connector) return;
  if (connector.dataset.orientation === "vertical") {
    const axisX = Number(connector.dataset.axisX);
    const anchorY = Number(connector.dataset.anchorY || connector.getAttribute("y1"));
    const edge = getRectangleEdgePoint(axisX, anchorY, x, y, width, height);
    connector.setAttribute("x1", axisX);
    connector.setAttribute("x2", edge.x);
    connector.setAttribute("y1", anchorY);
    connector.setAttribute("y2", edge.y);
    return;
  }
  const axisY = Number(connector.dataset.axisY);
  const anchorX = Number(connector.dataset.anchorX || connector.getAttribute("x1"));
  const edge = getRectangleEdgePoint(anchorX, axisY, x, y, width, height);
  connector.setAttribute("x1", anchorX);
  connector.setAttribute("y1", axisY);
  connector.setAttribute("x2", edge.x);
  connector.setAttribute("y2", edge.y);
}

function getRectangleEdgePoint(anchorX, anchorY, x, y, width, height) {
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const deltaX = anchorX - centerX;
  const deltaY = anchorY - centerY;
  if (Math.abs(deltaX) < Number.EPSILON && Math.abs(deltaY) < Number.EPSILON) {
    return { x: centerX, y };
  }
  const horizontalRatio = Math.abs(deltaX) / (width / 2);
  const verticalRatio = Math.abs(deltaY) / (height / 2);
  const scale = 1 / Math.max(horizontalRatio, verticalRatio, Number.EPSILON);
  return {
    x: centerX + deltaX * scale,
    y: centerY + deltaY * scale
  };
}

function setPeriodRange(svg, period, key, startCoord, endCoord) {
  const isVertical = period.dataset.orientation === "vertical";
  const bar = period.querySelector(".timeline-period-bar");
  const startHandle = period.querySelector('[data-edge="start"]');
  const endHandle = period.querySelector('[data-edge="end"]');
  const connector = svg.querySelector(`.marker-connector[data-key="${cssEscape(key)}"]`);
  if (isVertical) {
    period.dataset.startY = String(startCoord);
    period.dataset.endY = String(endCoord);
    bar.setAttribute("y", startCoord);
    bar.setAttribute("height", Math.max(18, endCoord - startCoord));
    if (startHandle) startHandle.setAttribute("cy", startCoord);
    if (endHandle) endHandle.setAttribute("cy", endCoord);
    if (connector) {
      const anchorY = (startCoord + endCoord) / 2;
      connector.dataset.anchorY = String(anchorY);
      if (connector.tagName.toLowerCase() === "line") connector.setAttribute("y1", anchorY);
      const card = svg.querySelector(`.timeline-card-node[data-key="${cssEscape(key)}"]`);
      if (card) updateConnector(svg, key, Number(card.dataset.x), Number(card.dataset.y), Number(card.dataset.width), Number(card.dataset.height));
    }
    return;
  }
  period.dataset.startX = String(startCoord);
  period.dataset.endX = String(endCoord);
  bar.setAttribute("x", startCoord);
  bar.setAttribute("width", Math.max(18, endCoord - startCoord));
  if (startHandle) startHandle.setAttribute("cx", startCoord);
  if (endHandle) endHandle.setAttribute("cx", endCoord);
  if (connector) {
    const anchorX = (startCoord + endCoord) / 2;
    connector.dataset.anchorX = String(anchorX);
    if (connector.tagName.toLowerCase() === "line") connector.setAttribute("x1", anchorX);
    const card = svg.querySelector(`.timeline-card-node[data-key="${cssEscape(key)}"]`);
    if (card) updateConnector(svg, key, Number(card.dataset.x), Number(card.dataset.y), Number(card.dataset.width), Number(card.dataset.height));
  }
}

function getSvgPointer(svg, event) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function getSvgBox(svg) {
  const [, , width, height] = svg.getAttribute("viewBox").split(/\s+/).map(Number);
  return { width, height };
}

function markerKey(marker) {
  return slugify(`${marker.date}-${marker.title}`);
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }
  return String(value).replace(/"/g, '\\"');
}

function getLabelVisibility(variant = currentMode) {
  const blank = variant === "student" || variant === "blank";
  const settings = visibilitySettings[blank ? "blank" : "complete"];
  return {
    blank,
    dates: !settings.hideDates,
    titles: !settings.hideTitles,
    keywords: !settings.hideKeywords,
    images: !settings.hideImages
  };
}

function getPositions(markers, minYear, maxYear, width, margin) {
  const usable = width - margin.left - margin.right;
  if (maxYear - minYear > 450) {
    const step = usable / Math.max(1, markers.length - 1);
    return markers.map((marker, index) => ({
      start: margin.left + index * step,
      end: margin.left + index * step + (marker.end > marker.start ? Math.min(90, step * 0.65) : 0)
    }));
  }

  const toX = (year) => margin.left + ((year - minYear) / Math.max(1, maxYear - minYear)) * usable;
  return markers.map((marker) => ({
    start: toX(marker.start),
    end: toX(marker.end)
  }));
}

function getVerticalPositions(markers, minYear, maxYear, height, margin) {
  const usable = height - margin.top - margin.bottom;
  if (maxYear - minYear > 450) {
    const step = usable / Math.max(1, markers.length - 1);
    return markers.map((marker, index) => ({
      start: margin.top + index * step,
      end: margin.top + index * step + (marker.end > marker.start ? Math.min(100, step * 0.65) : 0)
    }));
  }

  const toY = (year) => margin.top + ((year - minYear) / Math.max(1, maxYear - minYear)) * usable;
  return markers.map((marker) => ({
    start: toY(marker.start),
    end: toY(marker.end)
  }));
}

function getTimelineCardWidth(density) {
  return [292, 262][density];
}

function getVerticalTimelineCardWidth(density) {
  return [326, 300][density];
}

function getCardTextMetrics(marker, labelVisibility, cardWidth) {
  const hasVisibleImage = labelVisibility.images && marker.image;
  const textOffset = hasVisibleImage ? 66 : 0;
  const textWidth = cardWidth - textOffset - 28;
  const dateText = labelVisibility.dates ? marker.date : "";
  const titleText = labelVisibility.titles ? marker.title : "";
  const keywordText = labelVisibility.keywords ? marker.keywords : "";
  const dateLines = dateText ? wrapSvgText(dateText, Math.max(8, Math.floor(textWidth / 10))) : [];
  const titleLines = titleText ? wrapSvgText(titleText, Math.max(10, Math.floor(textWidth / 9))) : [];
  const keywordLines = keywordText ? wrapSvgText(keywordText, Math.max(12, Math.floor(textWidth / 7.5))) : [];
  const titleGap = dateLines.length && titleLines.length ? 8 : 0;
  const keywordGap = keywordLines.length && (dateLines.length || titleLines.length) ? 7 : 0;
  const textHeight = dateLines.length * 20
    + titleGap
    + titleLines.length * 20
    + keywordGap
    + keywordLines.length * 17;
  return {
    dateLines,
    titleLines,
    keywordLines,
    titleGap,
    keywordGap,
    textWidth,
    textHeight,
    textOffset,
    height: Math.max(hasVisibleImage ? 76 : 0, 38 + textHeight)
  };
}

function imageClipId(marker, index, variant) {
  return `image-${variant}-${index}-${markerKey(marker)}`;
}

function svgTextBlock(lines, x, y, lineHeight, attributes) {
  return `<text x="${x}" y="${y}" ${attributes}>${lines.map((line, index) => `<tspan x="${x}" dy="${index ? lineHeight : 0}">${escapeXml(line)}</tspan>`).join("")}</text>`;
}

function wrapSvgText(value, maxChars) {
  const words = String(value || "").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [""];
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const pieces = splitLongWord(word, maxChars);
    pieces.forEach((piece) => {
      const next = line ? `${line} ${piece}` : piece;
      if (next.length <= maxChars) {
        line = next;
      } else {
        if (line) lines.push(line);
        line = piece;
      }
    });
  });
  if (line) lines.push(line);
  return lines;
}

function splitLongWord(word, maxChars) {
  if (word.length <= maxChars) return [word];
  const pieces = [];
  for (let index = 0; index < word.length; index += maxChars) {
    pieces.push(word.slice(index, index + maxChars));
  }
  return pieces;
}

function distributeLanes(markers, positions, axisY, density, width, cardWidth, cardHeight) {
  const gapY = [24, 18][density];
  const used = { top: [], bottom: [] };

  return markers.map((marker, index) => {
    const side = index % 2 === 0 ? "top" : "bottom";
    const x = (positions[index].start + positions[index].end) / 2;
    const baseX = clamp(x - cardWidth / 2, 24, width - cardWidth - 24);
    const laneIndex = findLane(used[side], baseX, cardWidth);
    used[side][laneIndex] = baseX + cardWidth + 12;
    const y = side === "top"
      ? axisY - (laneIndex + 1) * (cardHeight + gapY) - 26
      : axisY + 52 + laneIndex * (cardHeight + gapY);
    return { side, x: baseX, y, cardWidth, cardHeight };
  });
}

function distributeVerticalLanes(markers, positions, axisX, density, width, height, cardWidth, cardHeight, margin) {
  const axisGap = 48;
  const gapY = [28, 22][density];
  const lastBottom = { left: margin.top - gapY, right: margin.top - gapY };

  return markers.map((marker, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    const anchorY = (positions[index].start + positions[index].end) / 2;
    const desiredY = clamp(anchorY - cardHeight / 2, margin.top, height - margin.bottom - cardHeight);
    const y = clamp(Math.max(desiredY, lastBottom[side] + gapY), margin.top, height - margin.bottom - cardHeight);
    lastBottom[side] = y + cardHeight;
    const x = side === "left"
      ? axisX - axisGap - cardWidth
      : axisX + axisGap;
    return { side, x: clamp(x, margin.left, width - margin.right - cardWidth), y, cardWidth, cardHeight };
  });
}

function findLane(lanes, x, width) {
  const index = lanes.findIndex((rightEdge) => x > rightEdge);
  if (index >= 0) return index;
  lanes.push(x + width);
  return lanes.length - 1;
}

function getTicks(minYear, maxYear, width, margin) {
  const span = Math.max(1, maxYear - minYear);
  const roughStep = span / 6;
  const magnitude = 10 ** Math.floor(Math.log10(roughStep));
  const step = [1, 2, 5, 10].map((factor) => factor * magnitude).find((value) => value >= roughStep) || magnitude * 10;
  const start = Math.ceil(minYear / step) * step;
  const ticks = [];
  for (let year = start; year <= maxYear; year += step) {
    ticks.push({
      year,
      x: margin.left + ((year - minYear) / span) * (width - margin.left - margin.right)
    });
  }
  return ticks.slice(0, 9);
}

function getVerticalTicks(minYear, maxYear, height, margin) {
  const span = Math.max(1, maxYear - minYear);
  const roughStep = span / 7;
  const magnitude = 10 ** Math.floor(Math.log10(roughStep));
  const step = [1, 2, 5, 10].map((factor) => factor * magnitude).find((value) => value >= roughStep) || magnitude * 10;
  const start = Math.ceil(minYear / step) * step;
  const ticks = [];
  for (let year = start; year <= maxYear; year += step) {
    ticks.push({
      year,
      y: margin.top + ((year - minYear) / span) * (height - margin.top - margin.bottom)
    });
  }
  return ticks.slice(0, 10);
}

async function addWikimediaImages() {
  const markers = parseMarkers(els.input.value);
  if (!markers.length) {
    els.wikimediaStatus.textContent = tr("addMarkersFirst");
    return;
  }

  els.wikimediaButton.disabled = true;
  els.wikimediaStatus.classList.add("is-loading");
  els.wikimediaStatus.textContent = tr("searchingImages");

  let found = 0;
  try {
    for (const marker of markers) {
      if (marker.image) continue;
      const image = await findWikimediaImage(marker);
      if (image) {
        marker.image = image;
        found += 1;
      }
    }
  } finally {
    els.wikimediaButton.disabled = false;
    els.wikimediaStatus.classList.remove("is-loading");
  }

  els.input.value = markers.map(formatMarkerLine).join("\n");
  update();
  els.wikimediaStatus.textContent = found
    ? tr("imagesAdded", { count: found, plural: found > 1 ? "s" : "" })
    : tr("noImageFound");
}

function removeWikimediaImages() {
  const markers = parseMarkers(els.input.value);
  const removed = markers.filter((marker) => marker.image).length;
  els.input.value = markers.map((marker) => formatMarkerLine({ ...marker, image: "" })).join("\n");
  layoutOverrides = {};
  update();
  els.wikimediaStatus.textContent = removed
    ? tr("imagesRemoved", { count: removed, plural: removed > 1 ? "s" : "" })
    : tr("noImageToRemove");
}

async function findWikimediaImage(marker) {
  const articleImage = await findWikipediaLeadImage(marker);
  if (articleImage) return articleImage;
  return findCommonsTeachingImage(marker);
}

async function findWikipediaLeadImage(marker) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `${marker.title} ${marker.date}`,
    gsrnamespace: "0",
    gsrlimit: "6",
    prop: "pageimages|pageprops",
    piprop: "thumbnail|original",
    pithumbsize: "520",
    pilicense: "free",
    origin: "*",
    format: "json"
  });

  try {
    const response = await fetch(`https://fr.wikipedia.org/w/api.php?${params}`);
    if (!response.ok) return "";
    const data = await response.json();
    const candidates = Object.values(data.query?.pages || {})
      .filter((page) => page.thumbnail?.source && page.pageprops?.disambiguation === undefined)
      .map((page) => {
        const fileLabel = getWikimediaFileLabel(page.thumbnail.source);
        return {
          url: normalizeWikimediaImage(page.thumbnail.source),
          score: scoreTeachingImage(marker, `${page.title} ${fileLabel}`, page.thumbnail.width, page.thumbnail.height, Number(page.index) || 10)
            + scoreLeadImageFile(marker, fileLabel)
        };
      })
      .filter((candidate) => candidate.url && candidate.score >= 35)
      .sort((a, b) => b.score - a.score);
    return candidates[0]?.url || "";
  } catch {
    return "";
  }
}

async function findCommonsTeachingImage(marker) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: `${marker.title} ${marker.date}`,
    gsrnamespace: "6",
    gsrlimit: "16",
    prop: "imageinfo",
    iiprop: "url|mime|size|extmetadata",
    iiurlwidth: "520",
    origin: "*",
    format: "json"
  });

  try {
    const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
    if (!response.ok) return "";
    const data = await response.json();
    const candidates = Object.values(data.query?.pages || {})
      .map((page) => {
        const info = page.imageinfo?.[0];
        const context = [
          page.title,
          info?.extmetadata?.ObjectName?.value,
          info?.extmetadata?.ImageDescription?.value,
          info?.extmetadata?.Categories?.value
        ].filter(Boolean).join(" ");
        return {
          url: normalizeWikimediaImage(info?.thumburl || info?.url || ""),
          mime: String(info?.mime || ""),
          score: scoreTeachingImage(marker, context, info?.thumbwidth || info?.width, info?.thumbheight || info?.height)
        };
      })
      .filter((candidate) => candidate.url && candidate.mime.startsWith("image/") && candidate.score >= 35)
      .sort((a, b) => b.score - a.score);
    return candidates[0]?.url || "";
  } catch {
    return "";
  }
}

function scoreTeachingImage(marker, candidateText, width, height, searchIndex = 10) {
  const text = normalizeSearchText(candidateText);
  if (!text) return -Infinity;
  const blocked = /\b(logo|icone|icon|pictogramme|pictogram|placeholder|blank|signature|autographe|autograph|watermark|audio|video)\b/;
  if (blocked.test(text)) return -Infinity;

  const markerTitle = normalizeSearchText(marker.title);
  const markerDate = normalizeSearchText(marker.date);
  const tokens = markerTitle.split(" ").filter((token) => token.length >= 4 && !COMMON_SEARCH_WORDS.has(token));
  const matchedTokens = tokens.filter((token) => text.includes(token)).length;
  let score = Math.max(0, 34 - searchIndex * 3) + matchedTokens * 18;
  if (text.includes(markerTitle)) score += 48;
  if (markerDate && text.includes(markerDate)) score += 12;
  if (/\b(portrait|photographie|photograph|photo|affiche|poster|tableau|painting|monument|statue|scene|bataille|battle)\b/.test(text)) score += 16;
  if (/\b(carte|map|diagramme|diagram|graphique|chart|drapeau|flag|blason|coat of arms)\b/.test(text)) score -= 22;

  const imageWidth = Number(width) || 0;
  const imageHeight = Number(height) || 0;
  if (imageWidth < 240 || imageHeight < 180) score -= 45;
  if (imageWidth && imageHeight) {
    const ratio = imageWidth / imageHeight;
    if (ratio > 3.2 || ratio < 0.32) score -= 35;
  }
  return score;
}

function scoreLeadImageFile(marker, fileLabel) {
  const fileText = normalizeSearchText(fileLabel);
  const titleTokens = normalizeSearchText(marker.title)
    .split(" ")
    .filter((token) => token.length >= 4 && !COMMON_SEARCH_WORDS.has(token));
  const matches = titleTokens.filter((token) => fileText.includes(token)).length;
  let score = matches ? matches * 24 : -60;
  if (/\b(portrait|photographie|photograph|photo|affiche|poster|monument|statue)\b/.test(fileText)) score += 14;
  return score;
}

function getWikimediaFileLabel(url) {
  try {
    return decodeURIComponent(new URL(url).pathname.split("/").filter(Boolean).slice(-2).join(" ")).replace(/_/g, " ");
  } catch {
    return "";
  }
}

function normalizeSearchText(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const COMMON_SEARCH_WORDS = new Set([
  "avec", "dans", "pour", "cette", "entre", "contre", "depuis", "apres", "avant", "premiere", "deuxieme", "guerre", "france"
]);

function isImageReference(value) {
  return Boolean(normalizeWikimediaImage(value));
}

function normalizeWikimediaImage(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";

  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();
    if (host === "commons.wikimedia.org" && url.pathname.includes("/wiki/File:")) {
      const fileName = decodeURIComponent(url.pathname.split("/wiki/File:")[1] || "").replace(/_/g, " ");
      return fileName ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=520` : "";
    }
    if (host === "commons.wikimedia.org" && url.pathname.includes("/wiki/Special:FilePath/")) {
      url.searchParams.set("width", "520");
      return url.toString();
    }
    if (host === "wikimedia.org" || host.endsWith(".wikimedia.org")) {
      return url.toString();
    }
  } catch {
    return "";
  }

  return "";
}

function importFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    els.input.value = String(reader.result || "");
    update();
  });
  reader.readAsText(file);
  event.target.value = "";
}

function exportTimeline(variant, format) {
  if (format === "svg") {
    downloadSvg(variant);
    return;
  }
  if (format === "json") {
    downloadJson(variant);
    return;
  }
  if (format === "pdf") {
    exportTimelinePdf(variant);
    return;
  }
  exportTimelineImage(variant, format);
}

function downloadSvg(variant) {
  const svg = els.preview.querySelector(`svg.timeline-svg[data-variant="${variant}"]`);
  if (!svg) return;
  const label = getTimelineLabel(variant);
  const source = `<?xml version="1.0" encoding="UTF-8"?>\n${prepareSvgForExport(svg).outerHTML}`;
  downloadFile(getExportFilename(variant, "svg"), source, "image/svg+xml");
  showDownloadSuccess(tr("svgDownloaded", { label }));
}

async function exportTimelineImage(variant, format) {
  const svg = els.preview.querySelector(`svg.timeline-svg[data-variant="${variant}"]`);
  if (!svg) return;
  const label = getTimelineLabel(variant);
  const extension = format === "jpeg" ? "jpg" : "png";
  setExportButtonsDisabled(true);
  els.status.textContent = tr("creatingImage", { label, format: extension.toUpperCase() });

  try {
    const canvas = await renderTimelineCanvas(svg);
    const mimeType = format === "jpeg" ? "image/jpeg" : "image/png";
    const blob = await canvasToBlob(canvas, mimeType, format === "jpeg" ? 0.95 : undefined);
    downloadBlob(getExportFilename(variant, extension), blob);
    showDownloadSuccess(tr("imageDownloaded", { label, format: extension.toUpperCase(), width: canvas.width, height: canvas.height }));
  } catch (error) {
    console.error("Export image impossible", error);
    els.status.textContent = tr("imageExportFailed");
  } finally {
    setExportButtonsDisabled(false);
  }
}

async function exportTimelinePdf(variant) {
  const svg = els.preview.querySelector(`svg.timeline-svg[data-variant="${variant}"]`);
  if (!svg) return;
  const label = getTimelineLabel(variant);
  setExportButtonsDisabled(true);
  els.status.textContent = tr("creatingPdf", { label });

  try {
    const canvas = await renderTimelineCanvas(svg);
    const jpegBlob = await canvasToBlob(canvas, "image/jpeg", 0.96);
    const pdfBlob = await createImagePdf(jpegBlob, canvas.width, canvas.height, svg.dataset.orientation);
    downloadBlob(getExportFilename(variant, "pdf"), pdfBlob);
    showDownloadSuccess(tr("pdfDownloaded", {
      label,
      orientation: tr(svg.dataset.orientation === "vertical" ? "portrait" : "landscape").toLocaleLowerCase(currentLanguage)
    }));
  } catch (error) {
    console.error("Export PDF impossible", error);
    els.status.textContent = tr("pdfExportFailed");
  } finally {
    setExportButtonsDisabled(false);
  }
}

async function renderTimelineCanvas(svg) {
  const clone = prepareSvgForExport(svg);
  await inlineSvgImages(clone);
  const [, , width, height] = clone.getAttribute("viewBox").split(/\s+/).map(Number);
  const scale = Math.min(3, 8192 / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const image = await loadSvgImage(clone.outerHTML);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas;
}

async function createImagePdf(jpegBlob, imageWidth, imageHeight, orientation) {
  const jpegBytes = new Uint8Array(await jpegBlob.arrayBuffer());
  const portrait = orientation === "vertical";
  const pageWidth = portrait ? 595.28 : 841.89;
  const pageHeight = portrait ? 841.89 : 595.28;
  const margin = 18;
  const scale = Math.min((pageWidth - margin * 2) / imageWidth, (pageHeight - margin * 2) / imageHeight);
  const drawWidth = imageWidth * scale;
  const drawHeight = imageHeight * scale;
  const drawX = (pageWidth - drawWidth) / 2;
  const drawY = (pageHeight - drawHeight) / 2;
  const content = `q\n${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${drawX.toFixed(2)} ${drawY.toFixed(2)} cm\n/Im0 Do\nQ\n`;
  const objects = [
    pdfText("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"),
    pdfText("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n"),
    pdfText(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth.toFixed(2)} ${pageHeight.toFixed(2)}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`),
    joinPdfBytes([
      pdfText(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${imageWidth} /Height ${imageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`),
      jpegBytes,
      pdfText("\nendstream\nendobj\n")
    ]),
    pdfText(`5 0 obj\n<< /Length ${pdfText(content).length} >>\nstream\n${content}endstream\nendobj\n`)
  ];
  const header = pdfText("%PDF-1.4\n%1234\n");
  const offsets = [];
  let byteOffset = header.length;
  objects.forEach((object) => {
    offsets.push(byteOffset);
    byteOffset += object.length;
  });
  const xrefOffset = byteOffset;
  const xref = pdfText(`xref\n0 6\n0000000000 65535 f \n${offsets.map((offset) => `${String(offset).padStart(10, "0")} 00000 n `).join("\n")}\ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return new Blob([header, ...objects, xref], { type: "application/pdf" });
}

function pdfText(value) {
  return new TextEncoder().encode(value);
}

function joinPdfBytes(parts) {
  const output = new Uint8Array(parts.reduce((total, part) => total + part.length, 0));
  let offset = 0;
  parts.forEach((part) => {
    output.set(part, offset);
    offset += part.length;
  });
  return output;
}

function setExportButtonsDisabled(disabled) {
  els.exportButtons.forEach((button) => { button.disabled = disabled; });
}

function prepareSvgForExport(svg) {
  const clone = svg.cloneNode(true);
  const [, , width, height] = clone.getAttribute("viewBox").split(/\s+/).map(Number);
  clone.querySelectorAll(".timeline-resize-handle, .timeline-period-handle").forEach((node) => node.remove());
  clone.querySelectorAll(".timeline-card-node").forEach((node) => {
    node.removeAttribute("tabindex");
    node.removeAttribute("role");
    node.removeAttribute("aria-label");
  });
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", width);
  clone.setAttribute("height", height);
  return clone;
}

async function inlineSvgImages(svg) {
  const images = [...svg.querySelectorAll("image[href]")];
  await Promise.all(images.map(async (image) => {
    const href = image.getAttribute("href");
    if (!href || href.startsWith("data:")) return;
    const response = await fetch(await resolveWikimediaDownloadUrl(href), { mode: "cors" });
    if (!response.ok) throw new Error("Image Wikimedia inaccessible");
    image.setAttribute("href", await blobToDataUrl(await response.blob()));
  }));
}

async function resolveWikimediaDownloadUrl(href) {
  const url = new URL(href);
  if (url.hostname !== "commons.wikimedia.org" || !url.pathname.includes("/wiki/Special:FilePath/")) {
    return href;
  }
  const fileName = decodeURIComponent(url.pathname.split("/wiki/Special:FilePath/")[1] || "");
  if (!fileName) return href;
  const params = new URLSearchParams({
    action: "query",
    titles: `File:${fileName}`,
    prop: "imageinfo",
    iiprop: "url|mime",
    iiurlwidth: "520",
    origin: "*",
    format: "json"
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
  if (!response.ok) return href;
  const data = await response.json();
  const info = Object.values(data.query?.pages || {})[0]?.imageinfo?.[0];
  return info?.thumburl || info?.url || href;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(blob);
  });
}

function loadSvgImage(source) {
  return new Promise((resolve, reject) => {
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.addEventListener("load", () => {
      setTimeout(() => URL.revokeObjectURL(url), 0);
      resolve(image);
    });
    image.addEventListener("error", () => {
      URL.revokeObjectURL(url);
      reject(new Error("SVG illisible"));
    });
    image.src = url;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Conversion impossible")), type, quality);
  });
}

function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

function downloadJson(variant) {
  const mode = variant === "student" ? "blank" : "complete";
  const payload = {
    version: variant === "student" ? "élève" : "complète",
    title: els.title.value,
    subtitle: els.subtitle.value,
    orientation: currentOrientation,
    axisDateSize: currentAxisDateSize,
    density: currentDensity,
    palette: currentPalette,
    visibility: visibilitySettings[mode],
    layoutOverrides,
    markers: parseMarkers(els.input.value)
  };
  downloadFile(getExportFilename(variant, "json"), JSON.stringify(payload, null, 2), "application/json");
  showDownloadSuccess(tr("jsonDownloaded", { label: getTimelineLabel(variant) }));
}

function getTimelineLabel(variant) {
  return tr(variant === "student" ? "studentTimeline" : "teacherTimeline").toLocaleLowerCase(currentLanguage);
}

function getExportFilename(variant, extension) {
  const fallback = currentLanguage === "en" ? "timeline" : "frise";
  const suffix = currentLanguage === "en"
    ? (variant === "student" ? "-to-complete" : "-reference")
    : (variant === "student" ? "-version-vierge" : "-version-complete");
  return `${slugify(els.title.value || fallback)}${suffix}.${extension}`;
}

function showDownloadSuccess(message) {
  const icon = document.createElement("img");
  icon.className = "download-success-icon";
  icon.src = "assets/icons/download-success.svg";
  icon.alt = "";
  icon.setAttribute("aria-hidden", "true");
  els.status.replaceChildren(icon, document.createTextNode(message));
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function updatePrintPageSize() {
  let style = document.querySelector("#dynamicPrintSize");
  if (!style) {
    style = document.createElement("style");
    style.id = "dynamicPrintSize";
    document.head.append(style);
  }
  style.textContent = `@media print { @page { size: A4 ${currentOrientation}; } }`;
}

function formatYear(year) {
  if (year >= 0) return String(year);
  return currentLanguage === "en" ? `${Math.abs(year)} BC` : `${Math.abs(year)} av. J.-C.`;
}

function truncateSvg(text, maxLength) {
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function escapeXml(value) {
  return escapeHtml(value);
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "frise";
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

init();
