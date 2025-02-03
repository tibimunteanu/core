import fs from "node:fs";

type Colors = {
  background: string;
  keyword: string;
  preprocessor: string;
  namespace: string;
  type: string;
  struct: string;
  function: string;
  variable: string;
  enum: string;
  literal: string;
  comment: string;
  punctuation: string;
  parameter: string;
  error: string;
  static: string;
};

const variants: Record<string, Colors> = {
  grinch: {
    background: "#1c1d1c",
    keyword: "#7d9da3",
    preprocessor: "#aa88aa",
    namespace: "#6faf8a",
    type: "#6faf8a",
    struct: "#91af82",
    function: "#ddbb77",
    variable: "#a0a088",
    enum: "#91ab62",
    literal: "#ce9178",
    comment: "#696f69",
    punctuation: "#919f89",
    parameter: "#d0c5a0",
    error: "#df6a6a",
    static: "#efaa57",
  },

  dusty: {
    background: "#1d1f21",
    keyword: "#c56c86",
    preprocessor: "#aa8d80",
    namespace: "#609bbf",
    type: "#609bbf",
    struct: "#609bbf",
    function: "#a8b499",
    variable: "#878787",
    enum: "#c48b4e",
    literal: "#b5647d",
    comment: "#5c605c",
    punctuation: "#656f6b",
    parameter: "#b3a178",
    error: "#eb5858",
    static: "#f5d065",
  },

  moonlight: {
    background: "#1b1c1d",
    keyword: "#6e9ac0",
    preprocessor: "#cc7b6f",
    namespace: "#8ab35c",
    type: "#8ab35c",
    struct: "#8ab35c",
    function: "#a2b197",
    variable: "#92928d",
    enum: "#d09663",
    literal: "#cc865b",
    comment: "#626762",
    punctuation: "#7e8378",
    parameter: "#9fb6d1",
    error: "#e96b6b",
    static: "#efc95f",
  },
};

const getTheme = (colors: Colors) => ({
  $schema: "vscode://schemas/color-theme",
  name: "Core",

  colors: {
    "editor.background": colors.background,
    "activityBar.background": colors.background,
    "sideBar.background": colors.background,
    "sideBarSectionHeader.background": colors.background,
    "sideBarSectionHeader.border": colors.background,

    "statusBar.background": "#2f2f2f",

    "statusBarItem.remoteBackground": "#16825d",
    "activityBarBadge.background": "#16825d",
    "menu.selectionBackground": "#16825d",

    "editor.selectionBackground": "#1f2f2c",
    "editor.inactiveSelectionBackground": "#1f2f2ca0",

    "editorCursor.foreground": "#a0d0b0",

    "editor.foreground": "#d4d4d4",
    "editor.selectionHighlightBackground": "#add6ff26",

    "sideBarTitle.foreground": colors.comment,
    "statusBarItem.remoteForeground": "#ffffff",

    "tab.selectedBackground": "#222222",
    "tab.selectedForeground": "#ffffffa0",
    "tab.lastPinnedBorder": "#cccccc",

    "checkbox.border": "#6b6b6b",
    "input.placeholderForeground": "#a6a6a6",
    "ports.iconRunningProcessForeground": "#369432",
    "widget.border": "#303031",
    "actionBar.toggledBackground": "#383a49",

    "list.dropBackground": "#383B3d",
    "list.activeSelectionIconForeground": "#ffffff",

    "editorIndentGuide.background1": "#404040",
    "editorIndentGuide.activeBackground1": "#707070",

    "menu.background": "#252526",
    "menu.foreground": "#cccccc",
    "menu.separatorBackground": "#454545",
    "menu.border": "#454545",
  },

  tokenColors: [
    {
      name: "Keyword",
      scope: [
        "keyword",
        "keyword.type",
        "keyword.type.zig",
        "keyword.control",
        "keyword.operator.delete",
        "keyword - keyword.operator",
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.cast",
        "keyword.operator.sizeof",
        "keyword.operator.alignof",
        "keyword.operator.typeid",
        "keyword.operator.alignas",
        "keyword.operator.instanceof",
        "keyword.operator.logical.python",
        "keyword.operator.wordlike",
        "keyword.operator.sizeof.cpp",
        "keyword.operator.sizeof.c",
        "keyword.operator.noexcept",
        "keyword.operator.expression",
        "keyword.operator.expression.typeof",
        "keyword.operation.graphql",
        "keyword.operator.new.ts",
        "keyword.operator.new.tsx",
        "keyword.on.graphql",
        "keyword.directive.preprocessor.glsl",
        "keyword.fragment.graphql",
        "keyword.other.important.css",
        "keyword.other.new.cs",
        "keyword.other.typedef.c",
        "keyword.other.using",
        "keyword.other.directive.using",
        "keyword.other.operator",
        "variable.language",
        "variable.language.wildcard.java",
        "variable.language.this.ts",
        "variable.language.this.tsx",
        "storage",
        "storage.type",
        "storage.modifier",
        "storage.modifier.glsl",
        "storage.modifier.c",
        "storage.modifier.import.java",
        "storage.modifier.package.java",
        "entity.name.operator",
        "support.variable.property.importmeta.tsx",
        "support.variable.jai",
        "this.self",
      ],
      settings: {
        foreground: colors.keyword,
      },
    },
    {
      name: "Preprocessor",
      scope: [
        "entity.name.function.preprocessor",
        "entity.name.function.preprocessor.c",
        "meta.preprocessor",
        "meta.preprocessor.macro.c",
      ],
      settings: {
        foreground: colors.preprocessor,
      },
    },
    {
      name: "Namespace",
      scope: [
        "entity.name.tag",
        "entity.name.tag.css",
        "entity.name.tag.less",
        "entity.name.section.markdown",
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.parent-selector.css",
        "entity.other.attribute-name.parent.less",
        "entity.other.attribute-name.pseudo-element.css",
        "entity.other.attribute-name.scss",
        "source.css entity.other.attribute-name.class",
        "source.css entity.other.attribute-name.pseudo-class",
        "source.css.less entity.other.attribute-name.id",
        "meta.selector.css",
        "keyword.operator.expression.void",
        "variable.language.relations.prisma",
      ],
      settings: {
        foreground: colors.namespace,
      },
    },
    {
      name: "Type",
      scope: [
        "entity.name.type",
        "entity.name.class",
        "entity.name.namespace",
        "entity.name.enum.jai",
        "entity.name.struct.jai",
        "entity.other.attribute",
        "entity.name.scope-resolution",
        "entity.other.inherited-class",
        "support.type",
        "support.class",
        "support.constant.math",
        "support.constant.dom",
        "support.constant.json",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.cs",
        "storage.type.jai",
        "storage.type.struct.jai",
        "storage.type.generic.cs",
        "storage.type.modifier.cs",
        "storage.type.variable.cs",
        "storage.type.annotation.java",
        "storage.type.generic.java",
        "storage.type.java",
        "storage.type.object.array.java",
        "storage.type.primitive.array.java",
        "storage.type.primitive.java",
        "storage.type.token.java",
        "storage.type.groovy",
        "storage.type.annotation.groovy",
        "storage.type.parameters.groovy",
        "storage.type.generic.groovy",
        "storage.type.object.array.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.groovy",
        "storage.type",
        "meta.type.cast.expr",
        "meta.type.new.expr",
      ],
      settings: {
        foreground: colors.type,
      },
    },
    {
      name: "Function",
      scope: [
        "entity.name.function",
        "entity.name.function.c",
        "support.function",
        "support.constant.handlebars",
        "source.powershell variable.other.member",
        "entity.name.operator.custom-literal",
        "keyword.other.main.jai",
      ],
      settings: {
        foreground: colors.function,
      },
    },
    {
      name: "Variable",
      scope: [
        "variable",
        "variable.css",
        "variable.other.constant",
        "entity.name.variable",
        "entity.other.attribute-name",
        "entity.name.fragment.graphql",
        "entity.name.label",
        "source.glsl",
        "source.css variable",
        "source.coffee.embedded",
        "meta.function.c",
        "meta.object-literal.key",
        "meta.definition.variable.name",
        "meta.structure.dictionary.key.python",
        "support.type.property-name",
        "support.type.vendored.property-name",
        "support.variable",
        "support.variable.property.ts",
        "support.variable.glsl",
        "support.constant.property-value",
        "support.constant.font-name",
        "support.constant.media-type",
        "support.constant.media",
        "support.constant.color",
        "constant.other.color.rgb-value",
        "constant.other.rgb-value",
        "constant.character.escape",
        "constant.character",
        "constant.other.option",
      ],
      settings: {
        foreground: colors.variable,
      },
    },
    {
      name: "Enum",
      scope: [
        "variable.other.enummember",
        "variable.enum.jai",
        "meta.property-value.css",
        "support.constant.property-value.css",
        "support.constant.font-name.css",
        "support.constant.constant.prisma",
      ],
      settings: {
        foreground: colors.enum,
      },
    },
    {
      name: "Literal",
      scope: [
        "string",
        "string.tag",
        "string.value",
        "constant.numeric",
        "constant.language",
        "constant.language.null",
        "constant.language.undefined",
        "constant.language.boolean",
        "constant.language.json",
        "constant.language.json.comments",
        "constant.regexp",
        "meta.jsx.children.tsx",
        "meta.embedded.assembly",
        "meta.preprocessor.string",
        "meta.preprocessor.numeric",
        "punctuation.definition.constant.css",
        "keyword.other.unit",
        "punctuation.definition.string.import.begin.jai",
      ],
      settings: {
        foreground: colors.literal,
      },
    },
    {
      name: "Comment",
      scope: [
        "comment",
        "punctuation.definition.comment",
        "punctuation.definition.heading.markdown",
        "meta.paragraph.markdown",
        "text.html.markdown",
      ],
      settings: {
        foreground: colors.comment,
      },
    },
    {
      name: "Punctuation",
      scope: [
        "punctuation",
        "punctuation.section.embedded",
        "punctuation.accessor.optional",
        "punctuation.definition.parameters",
        "punctuation.definition.binding-pattern",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.definition.tag",
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php",
        "meta.parens.block",
        "meta.brace.round",
        "meta.brace.square",
        "keyword.operator.arithmetic",
        "keyword.operator.bitwise",
        "keyword.operator",
        "keyword.operator.comparison",
        "keyword.operator.logical",
        "keyword.operator.increment",
        "keyword.operator.assignment",
        "keyword.operator.jai",
        "keyword.declaration.jai",
        "storage.modifier.array.bracket.square",
        "storage.type.function.arrow",
        "constant.other.placeholder",
        "constant.language.import-export-all",
        "source.zig",
        "source.prisma.array",
        "source.prisma.attribute.with_arguments",
        "punctuation.section.braces.start.jai",
        "punctuation.section.braces.end.jai",
      ],
      settings: {
        foreground: colors.punctuation,
      },
    },

    // NOTE: Misc
    {
      scope: "emphasis",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "strong",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: "header",
      settings: {
        foreground: "#000080",
      },
    },
    {
      scope: "invalid",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "#569cd6",
      },
    },
    {
      scope: "markup.heading",
      settings: {
        fontStyle: "bold",
        foreground: "#569cd6",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.strikethrough",
      settings: {
        fontStyle: "strikethrough",
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: "#b5cea8",
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: colors.literal,
      },
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: "#569cd6",
      },
    },
    {
      scope: "punctuation.definition.quote.begin.markdown",
      settings: {
        foreground: "#6a9955",
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#6796e6",
      },
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: colors.literal,
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#569cd6",
      },
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: "#9cdcfe",
      },
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: "#b5cea8",
      },
    },
    {
      scope: ["variable.parameter.jai"],
      settings: {
        foreground: colors.parameter,
      },
    },
  ],

  semanticHighlighting: true,
  semanticTokenColors: {
    // Keyword
    newOperator: colors.keyword,
    keyword: colors.keyword,
    "keyword:csharp": colors.keyword,

    // Preprocessor
    macro: colors.preprocessor,

    // Namespace
    namespace: colors.namespace,
    "variable.defaultLibrary": colors.namespace,
    class: colors.namespace,

    // Struct
    "struct:csharp": colors.struct,
    "enum:csharp": colors.struct,

    // Enum
    enumMember: colors.enum,

    // Variable
    constant: colors.variable,
    property: colors.variable,
    "field.static:csharp": colors.variable,
    "property.static:csharp": colors.variable,
    "constant.static:csharp": colors.variable,
    variable: colors.variable,

    // Literal
    keywordLiteral: colors.literal,
    stringLiteral: colors.literal,
    customLiteral: colors.literal,
    numberLiteral: colors.literal,
    "enumMember:csharp": colors.literal,

    // Punctuation
    punctuation: colors.punctuation,

    // Parameter
    parameter: colors.parameter,

    // Error
    errorTag: colors.error,

    // Static
    "method.static:csharp": colors.static,
    "builtin:zig": colors.static,
  },
});

fs.mkdirSync("./themes", { recursive: true });

Object.entries(variants).forEach(([name, colors]) => {
  fs.writeFileSync(
    `./themes/Core-${name}-color-theme.json`,
    JSON.stringify(getTheme(colors), null, 2)
  );
});
