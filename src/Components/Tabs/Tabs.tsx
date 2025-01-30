import {
  Button,
  Rows,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@canva/app-ui-kit";
import { addPage } from "@canva/design";
import { useIntl } from "react-intl";
import { getCroppedImageDataUrl } from "utils/cropImage";
import { templateOneGenerate } from "../../helper/templateOne";
import { templateThreeGenerate } from "../../helper/templateThree";

export default function AppTabs() {

  const onClick = async () => {
    const url = getCroppedImageDataUrl(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
      50,
      50,
      100,
    );

    await addPage({
      elements: [
        {
          type: "text",
          fontRef: "YAFdtQi73Xs:0",
          children: ["BRADFIELD BADGERFOX"],
          top: 10,
          left: 0,
          fontSize: 16,
          fontWeight: "medium",
          width: 300,
          textAlign: "center",
        },
        {
          type: "group",
          top: 30,
          left: 0,
          width: 300,
          height: "auto",
          children: [
            {
              type: "image",
              altText: {
                text: "Hello",
                decorative: false,
              },
              top: 0,
              left: 10,
              height: 150,
              width: 300,
              dataUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
            },
            {
              type: "image",
              altText: {
                text: "Hello",
                decorative: false,
              },
              top: 124,
              left: 245,
              height: 50,
              width: 50,
              dataUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["ALEX PAPA"],
              top: 195,
              left: 235,
              fontSize: 8,
              fontWeight: "normal",
              width: 70,
              textAlign: "center",
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["17253947645"],
              top: 205,
              left: 235,
              fontSize: 8,
              fontWeight: "normal",
              width: 70,
              textAlign: "center",
            },
          ],
        },

        {
          type: "text",
          fontRef: "YAFdtQi73Xs:0",
          children: ["VAUCLUSE"],
          top: 187,
          left: 10,
          fontSize: 8,
          // fontWeight: "bold",
          width: 100,
          textAlign: "start",
        },
        {
          type: "text",
          fontRef: "YAFdtQi73Xs:0",
          children: ["3 MAYALL AVENUE"],
          top: 197,
          left: 10,
          fontSize: 8,
          width: 100,
          textAlign: "start",
        },
        {
          type: "group",
          top: 215,
          left: 12,
          width: 68,
          height: "auto",
          children: [
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["5"],
              top: 0,
              left: 0,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 9,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJlZCI+PHBhdGggZD0iTTIgNHYxNiIvPjxwYXRoIGQ9Ik0yIDhoMThhMiAyIDAgMCAxIDIgMnYxMCIvPjxwYXRoIGQ9Ik0yIDE3aDIwIi8+PHBhdGggZD0iTTYgOHY5Ii8+PC9zdmc+",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["4"],
              top: 0,
              left: 40,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 49,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYmF0aCI+PHBhdGggZD0iTTEwIDQgOCA2Ii8+PHBhdGggZD0iTTE3IDE5djIiLz48cGF0aCBkPSJNMiAxMmgyMCIvPjxwYXRoIGQ9Ik03IDE5djIiLz48cGF0aCBkPSJNOSA1IDcuNjIxIDMuNjIxQTIuMTIxIDIuMTIxIDAgMCAwIDQgNXYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTUiLz48L3N2Zz4=",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["2"],
              top: 0,
              left: 73,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 82,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhci1mcm9udCI+PHBhdGggZD0ibTIxIDgtMiAyLTEuNS0zLjdBMiAyIDAgMCAwIDE1LjY0NiA1SDguNGEyIDIgMCAwIDAtMS45MDMgMS4yNTdMNSAxMCAzIDgiLz48cGF0aCBkPSJNNyAxNGguMDEiLz48cGF0aCBkPSJNMTcgMTRoLjAxIi8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjgiIHg9IjMiIHk9IjEwIiByeD0iMiIvPjxwYXRoIGQ9Ik01IDE4djIiLz48cGF0aCBkPSJNMTkgMTh2MiIvPjwvc3ZnPg==",
              height: 12,
              width: 12,
            },
          ],
        },
        {
          type: "group",
          top: 230,
          left: 12,
          width: 70,
          height: 15,
          children: [
            {
              top: 0,
              left: 0,
              width: 70,
              height: 15,
              type: "shape",
              paths: [
                {
                  d: "M 7.29 0 H 62.71 A 7.29 7.29 0 0 1 70 7.29 V 7.29 A 7.29 7.29 0 0 1 62.71 15 H 7.29 A 7.29 7.29 0 0 1 0 7.29 V 7.29 A 7.29 7.29 0 0 1 7.29 0 Z",
                  fill: {
                    color: "#F87F0F"
                  }
                }
              ],
              viewBox: {
                top: 0,
                left: 0,
                width: 70,
                height: 15
              }
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["Enquire Now"],
              top: 4,
              left: 5,
              fontSize: 6,
              width: 60,
              textAlign: "center",
              color: "#ffffff"
            }
          ]
        }
        
        

      ],
    });
  };
  const onClickTemplate4 = async () => {
    const url = getCroppedImageDataUrl(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
      50,
      50,
      100,
    );

    await addPage({
      elements: [
        {
          type: "group",
          top: 0,
          left: 0,
          width: 600,
          height: "auto",
          children: [
            {
              type: "image",
              altText: {
                text: "Hello",
                decorative: false,
              },
              top: 0,
              left: 0,
              height: 460,
              width: 600,
              dataUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
            },
            {
              type: "image",
              altText: {
                text: "Hello",
                decorative: false,
              },
              top: 395,
              left: 445,
              height: 115,
              width: 115,
              dataUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["ALEX PAPA"],
              top: 535,
              left: 440,
              fontSize: 20,
              fontWeight: "normal",
              width: 120,
              textAlign: "center",
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["0441394745"],
              top: 560,
              left: 440,
              fontSize: 18,
              fontWeight: "normal",
              width: 120,
              textAlign: "center",
            },
          ],
        },

        {
          type: "text",
          fontRef: "YAFdtQi73Xs:0",
          children: ["VAUCLUSE"],
          top: 485,
          left: 25,
          fontSize: 24,
          fontWeight: "normal",
          width: 150,
          textAlign: "start",
          //  fontRef:
        },
        {
          type: "text",
          fontRef: "YAFdtQi73Xs:0",
          children: ["3 MAYALL AVENUE"],
          top: 515,
          left: 25,
          fontSize: 20,
          width: 200,
          textAlign: "start",
        },
        {
          type: "group",
          top: 555,
          left: 27,
          width: 160,
          height: "auto",
          children: [
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["5"],
              top: 0,
              left: 0,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 9,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJlZCI+PHBhdGggZD0iTTIgNHYxNiIvPjxwYXRoIGQ9Ik0yIDhoMThhMiAyIDAgMCAxIDIgMnYxMCIvPjxwYXRoIGQ9Ik0yIDE3aDIwIi8+PHBhdGggZD0iTTYgOHY5Ii8+PC9zdmc+",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["4"],
              top: 0,
              left: 38,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 47,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYmF0aCI+PHBhdGggZD0iTTEwIDQgOCA2Ii8+PHBhdGggZD0iTTE3IDE5djIiLz48cGF0aCBkPSJNMiAxMmgyMCIvPjxwYXRoIGQ9Ik03IDE5djIiLz48cGF0aCBkPSJNOSA1IDcuNjIxIDMuNjIxQTIuMTIxIDIuMTIxIDAgMCAwIDQgNXYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTUiLz48L3N2Zz4=",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "YAFdtQi73Xs:0",
              children: ["2"],
              top: 0,
              left: 73,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 82,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhci1mcm9udCI+PHBhdGggZD0ibTIxIDgtMiAyLTEuNS0zLjdBMiAyIDAgMCAwIDE1LjY0NiA1SDguNGEyIDIgMCAwIDAtMS45MDMgMS4yNTdMNSAxMCAzIDgiLz48cGF0aCBkPSJNNyAxNGguMDEiLz48cGF0aCBkPSJNMTcgMTRoLjAxIi8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjgiIHg9IjMiIHk9IjEwIiByeD0iMiIvPjxwYXRoIGQ9Ik01IDE4djIiLz48cGF0aCBkPSJNMTkgMTh2MiIvPjwvc3ZnPg==",
              height: 12,
              width: 12,
            },
          ],
        },
      ],
    });
  };

  const intl = useIntl();

  return (
    <div>
      <Tabs>
        <Rows spacing="1u">
          <TabList>
            <Tab id="template">Template</Tab>
            <Tab id="videos">Custom</Tab>
            <Tab id="audio">Agents</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="template">
              <Rows spacing="2u">
                <Button variant="primary" onClick={templateOneGenerate} stretch>
                  Template 1 (300 * 600)
                </Button>
                <Button variant="primary" onClick={onClick} stretch>
                  {intl.formatMessage({
                    defaultMessage: "Template 2 (300 * 250)",
                    description:
                      "Button text to do something cool. Creates a new text element when pressed.",
                  })}
                </Button>
                <Button variant="primary" onClick={templateThreeGenerate} stretch>
                  Template 3 (970 * 250)
                </Button>
                <Button variant="primary" onClick={onClickTemplate4} stretch>
                  {intl.formatMessage({
                    defaultMessage: "Template 4 (600 * 600)",
                    description:
                      "Button text to do something cool. Creates a new text element when pressed.",
                  })}
                </Button>

              </Rows>
            </TabPanel>
            <TabPanel id="videos">
              <Text>Videos</Text>
            </TabPanel>
            <TabPanel id="audio">
              <Text>Audio</Text>
            </TabPanel>
          </TabPanels>
        </Rows>
      </Tabs>
    </div>
  );
}
