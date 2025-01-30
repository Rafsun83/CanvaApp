import { addPage } from "@canva/design";

export const templateOneGenerate = async () => {
  await addPage({
    elements: [
      {
        type: "text",
        fontRef: "YAFdJgT0SHI:0",
        children: ["BRADFIELD BADGERFOX"],
        top: 10,
        left: 0,
        fontSize: 18,
        fontWeight: "semibold",
        width: 300,
        textAlign: "center",
      },
      {
        type: "image",
        altText: {
          text: "Property Image",
          decorative: false,
        },
        top: 40,
        left: 0,
        height: 300,
        width: 300,
        dataUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
      },
      {
        type: "text",
        children: ["VAUCLUSE"],
        fontRef: "YAFdJgT0SHI:0",
        top: 360,
        left: 10,
        fontSize: 18,
        fontWeight: "bold",
        width: 280,
        textAlign: "start",
      },
      {
        type: "text",
        children: ["3 MYALL AVENUE"],
        fontRef: "YAFdJgT0SHI:0",
        top: 380,
        left: 10,
        fontSize: 18,
        width: 280,
        textAlign: "start",
      },
      {
        type: "group",
        top: 415,
        left: 20,
        width: 120,
        height: "auto",
        children: [
          {
            type: "text",
            fontRef: "YAFdJgT0SHI:0",
            children: ["3"],
            top: 0,
            left: 0,
            fontSize: 12,
            textAlign: "start",
          },
          {
            type: "image",
            top: 0,
            left: 8,
            altText: { text: "bed icon", decorative: false },
            dataUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYmVkIj48cGF0aCBkPSJNMiA0djE2Ii8+PHBhdGggZD0iTTIgOGgxOGEyIDIgMCAwIDEgMiAydjEwIi8+PHBhdGggZD0iTTIgMTdoMjAiLz48cGF0aCBkPSJNNiA4djkiLz48L3N2Zz4=",
            height: 15,
            width: 15,
          },
          {
            type: "text",
            fontRef: "YAFdJgT0SHI:0",
            children: ["3"],
            top: 0,
            left: 30,
            fontSize: 12,
            textAlign: "start",
          },
          {
            type: "image",
            top: 0,
            left: 38,
            altText: { text: "bath icon", decorative: false },
            dataUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYmF0aCI+PHBhdGggZD0iTTEwIDQgOCA2Ii8+PHBhdGggZD0iTTE3IDE5djIiLz48cGF0aCBkPSJNMiAxMmgyMCIvPjxwYXRoIGQ9Ik03IDE5djIiLz48cGF0aCBkPSJNOSA1IDcuNjIxIDMuNjIxQTIuMTIxIDIuMTIxIDAgMCAwIDQgNXYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTUiLz48L3N2Zz4=",
            height: 15,
            width: 15,
          },
          {
            type: "text",
            fontRef: "YAFdJgT0SHI:0",
            children: ["5"],
            top: 0,
            left: 60,
            fontSize: 12,
            textAlign: "start",
          },
          {
            type: "image",
            top: 0,
            left: 68,
            altText: { text: "car icon", decorative: false },
            dataUrl:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtY2FyLWZyb250Ij48cGF0aCBkPSJtMjEgOC0yIDItMS41LTMuN0EyIDIgMCAwIDAgMTUuNjQ2IDVIOC40YTIgMiAwIDAgMC0xLjkwMyAxLjI1N0w1IDEwIDMgOCIvPjxwYXRoIGQ9Ik03IDE0aC4wMSIvPjxwYXRoIGQ9Ik0xNyAxNGguMDEiLz48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iOCIgeD0iMyIgeT0iMTAiIHJ4PSIyIi8+PHBhdGggZD0iTTUgMTh2MiIvPjxwYXRoIGQ9Ik0xOSAxOHYyIi8+PC9zdmc+",
            height: 15,
            width: 15,
          },
        ],
      },
      {
        type: "group",
        top: 460,
        left: 0,
        width: 300,
        height: 70,
        children: [
          {
            top: 10,
            left: 0,
            type: "shape",
            paths: [
              {
                d: "M 0 0 H 720 V 720 H 0 L 0 0",
                fill: {
                  color: "#F3F3F3",
                },
              },
            ],
            width: 300,
            height: 50,
            viewBox: {
              top: 0,
              left: 0,
              width: 300,
              height: 50,
            },
          },
          {
            type: "image",
            altText: {
              text: "agent image",
              decorative: false,
            },
            top: 0,
            left: 15,
            height: 70,
            width: 70,
            dataUrl:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
          },
          {
            type: "text",
            fontRef: "YAFdJgT0SHI:0",
            children: ["ALEX PAPA"],
            top: 24,
            left: 100,
            fontSize: 12,
            width: 150,
            textAlign: "start",
          },
          {
            type: "text",
            fontRef: "YAFdJgT0SHI:0",
            children: ["+0414 775 816"],
            top: 39,
            left: 100,
            fontSize: 8,
            width: 150,
            textAlign: "start",
          },
        ],
      },
      {
        type: "group",
        top: 555,
        left: 20,
        width: 120,
        height: 25,
        children: [
          {
            top: 0,
            left: 0,
            width: 120,
            height: 25,
            type: "shape",
            paths: [
              {
                d: "M 12.5 0 H 107.5 A 12.5 12.5 0 0 1 120 12.5 V 12.5 A 12.5 12.5 0 0 1 107.5 25 H 12.5 A 12.5 12.5 0 0 1 0 12.5 V 12.5 A 12.5 12.5 0 0 1 12.5 0 Z",
                fill: {
                  color: "#F87F0F",
                },
              },
            ],
            viewBox: {
              top: 0,
              left: 0,
              width: 120,
              height: 25,
            },
          },
          {
            type: "text",
            fontRef: "YAFdJgT0SHI:0",
            children: ["Enquire Now"],
            top: 6,
            left: 0,
            fontSize: 12,
            width: 120,
            textAlign: "center",
            color: "#ffffff",
          },
        ],
      },
    ],
  });
};
