import {
  Badge,
  Button,
  EmbedCard,
  Pill,
  Rows,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Title,
} from "@canva/app-ui-kit";
import { addPage } from "@canva/design";
import { useIntl } from "react-intl";
import { getCroppedImageDataUrl } from "utils/cropImage";
import { useAddElement } from "utils/use_add_element";

export default function AppTabs() {
  const addElement = useAddElement();

  const handlePillClick = () => {
    console.log("Click");
  };

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
              height: 160,
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
              top: 137,
              left: 255,
              height: 40,
              width: 40,
              dataUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
            },
            {
              type: "text",
              children: ["ALEX PAPA"],
              top: 190,
              left: 240,
              fontSize: 8,
              fontWeight: "normal",
              width: 70,
              textAlign: "center",
            },
            {
              type: "text",
              children: ["17253947645"],
              top: 200,
              left: 240,
              fontSize: 8,
              fontWeight: "normal",
              width: 70,
              textAlign: "center",
            },
          ],
        },

        {
          type: "text",
          children: ["VAUCLUSE"],
          top: 200,
          left: 10,
          fontSize: 7,
          fontWeight: "normal",
          width: 100,
          textAlign: "start",
        },
        {
          type: "text",
          children: ["3 MAYALL AVENUE"],
          top: 210,
          left: 10,
          fontSize: 7,
          width: 100,
          textAlign: "start",
        },
        {
          type: "group",
          top: 224,
          left: 10,
          width: 50,
          height: "auto",
          children: [
            {
              type: "text",
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
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJlZCI+PHBhdGggZD0iTTIgNHYxNiIvPjxwYXRoIGQ9Ik0yIDhoMThhMiAyIDAgMCAxIDIgMnYxMCIvPjxwYXRoIGQ9Ik0yIDE3aDIwIi8+PHBhdGggZD0iTTYgOHY5Ii8+PC9zdmc+",
              height: 12,
              width: 12,
            },
            {
              type: "text",
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
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYmF0aCI+PHBhdGggZD0iTTEwIDQgOCA2Ii8+PHBhdGggZD0iTTE3IDE5djIiLz48cGF0aCBkPSJNMiAxMmgyMCIvPjxwYXRoIGQ9Ik03IDE5djIiLz48cGF0aCBkPSJNOSA1IDcuNjIxIDMuNjIxQTIuMTIxIDIuMTIxIDAgMCAwIDQgNXYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTUiLz48L3N2Zz4=",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              children: ["3"],
              top: 0,
              left: 60,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 68,
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
          top: 226,
          left: 10,
          width: 70,
          height: "auto",
          children: [
            {
              type: "shape",
              top: 220,
              left: 10,
              width: 60,
              height: 25,
              viewBox: {
                top: 0,
                left: 10,
                width: 60,
                height: 23,
              },
              paths: [
                {
                  d: "M10 10 h80 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-80 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10 Z",
                  fill: {
                    color: "#ff0099",
                  },
                },
              ],
            },
            {
              type: "text",
              children: ["Enquery Now"],
              top: 235,
              left: 20,
              fontSize: 6,
              width: 70,
              textAlign: "start",
              color: "#f1f1f1",
            },
          ],
        },
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
              height: 480,
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
              top: 425,
              left: 450,
              height: 100,
              width: 100,
              dataUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAdRJREFUOE9dlAFrE0EUhGfzM/OLCoJYKoFAqbR0L6UoiKLoT9Pse1Nn3t41NXDcBfa+nZk3e+3z0++eADICJPWAiAAYQAzkCMQYiPgLnv943S4DAL2mAWiGkPvMBHUxCqiFoWeBzohx9p1xBpho6wUs7fn0q5Pck4kCBSiIlQU4JiQKkmMUABMkyNPpZ0cKQgMEkgLD9D+GQbFBzmgkdhOCgvwoyLSzqdkUDau6hOzIUqING5Z2evzeCeyxQQL1PNXY2qpEwOHwmzKzLSytP3zrAPewnQr2FZJ+yUoc6rA9TU0gQQAK8rXDwWq8guRbSFYmnpKB6z3mhLi0x09fOqXEgFLjHf6zlAp2qtKEbMt2uLSH2+eCcPYkVaK3oNSUph1lpfJJnUZNZXJ/7D2h6ejlNZcJmhkpk1JSIVePViVY2t3hvpOoTES+zGZ2x32REvdmAhws0Yil3d7czcZOJbYygclqrcatcBXyeiRSjVVfuLTj+6N74qloZwOmHUx7Lt7YlCj0Oj+EG3t4d+hE7uFd62o+oVpQMAW7KvDBNIRQc93Yj1fXr41dXxR/wtbjsDXYNi4gsnNz9aHDxUvfvDuAnXbTd8ZBj2qypjQrsAPr7Pz7vQBKj7pE+J6clQAAAABJRU5ErkJggg==",
            },
            {
              type: "text",
              children: ["ALEX PAPA"],
              top: 540,
              left: 440,
              fontSize: 18,
              fontWeight: "normal",
              width: 120,
              textAlign: "center",
            },
            {
              type: "text",
              children: ["0441394745"],
              top: 565,
              left: 440,
              fontSize: 16,
              fontWeight: "normal",
              width: 120,
              textAlign: "center",
            },
          ],
        },

        {
          type: "text",
          children: ["VAUCLUSE"],
          top: 500,
          left: 20,
          fontSize: 20,
          fontWeight: "normal",
          width: 150,
          textAlign: "start",
          //  fontRef:
        },
        {
          type: "text",
          children: ["3 MAYALL AVENUE"],
          top: 525,
          left: 20,
          fontSize: 16,
          width: 170,
          textAlign: "start",
        },
        {
          type: "group",
          top: 555,
          left: 20,
          width: 100,
          height: "auto",
          children: [
            // {
            //   type: "image",
            //   top: 0,
            //   left: 0,
            //   altText: { text: "adadsda", decorative: false },
            //   dataUrl:
            //     "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYmF0aCI+PHBhdGggZD0iTTEwIDQgOCA2Ii8+PHBhdGggZD0iTTE3IDE5djIiLz48cGF0aCBkPSJNMiAxMmgyMCIvPjxwYXRoIGQ9Ik03IDE5djIiLz48cGF0aCBkPSJNOSA1IDcuNjIxIDMuNjIxQTIuMTIxIDIuMTIxIDAgMCAwIDQgNXYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTUiLz48L3N2Zz4=",
            //   height: 15,
            //   width: 15,
            // },
            {
              type: "text",
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
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJlZCI+PHBhdGggZD0iTTIgNHYxNiIvPjxwYXRoIGQ9Ik0yIDhoMThhMiAyIDAgMCAxIDIgMnYxMCIvPjxwYXRoIGQ9Ik0yIDE3aDIwIi8+PHBhdGggZD0iTTYgOHY5Ii8+PC9zdmc+",
              height: 15,
              width: 15,
            },
            {
              type: "text",
              children: ["4"],
              top: 0,
              left: 30,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 38,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYmF0aCI+PHBhdGggZD0iTTEwIDQgOCA2Ii8+PHBhdGggZD0iTTE3IDE5djIiLz48cGF0aCBkPSJNMiAxMmgyMCIvPjxwYXRoIGQ9Ik03IDE5djIiLz48cGF0aCBkPSJNOSA1IDcuNjIxIDMuNjIxQTIuMTIxIDIuMTIxIDAgMCAwIDQgNXYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTUiLz48L3N2Zz4=",
              height: 15,
              width: 15,
            },
            {
              type: "text",
              children: ["2"],
              top: 0,
              left: 60,
              fontSize: 12,
              textAlign: "start",
            },
            {
              type: "image",
              top: 0,
              left: 68,
              altText: { text: "adadsda", decorative: false },
              dataUrl:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhci1mcm9udCI+PHBhdGggZD0ibTIxIDgtMiAyLTEuNS0zLjdBMiAyIDAgMCAwIDE1LjY0NiA1SDguNGEyIDIgMCAwIDAtMS45MDMgMS4yNTdMNSAxMCAzIDgiLz48cGF0aCBkPSJNNyAxNGguMDEiLz48cGF0aCBkPSJNMTcgMTRoLjAxIi8+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjgiIHg9IjMiIHk9IjEwIiByeD0iMiIvPjxwYXRoIGQ9Ik01IDE4djIiLz48cGF0aCBkPSJNMTkgMTh2MiIvPjwvc3ZnPg==",
              height: 15,
              width: 15,
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
                <Rows spacing="1u">
                  <Pill
                    ariaLabel="a pill"
                    onClick={handlePillClick}
                    // start={() => {}}
                    text="Configure Your Branding"
                    // selected
                    showTooltip={{
                      disabled: true,
                    }}
                    role="button"
                  />
                </Rows>

                <Rows spacing="0.5u">
                  <Title size="xsmall">Property Template</Title>
                  <Text size="small">First Template Showing Here.</Text>
                  <EmbedCard
                    ariaLabel="Add embed to design"
                    bottomEnd={<Badge text="custom" tone="contrast" />}
                    description="Puppyhood"
                    onClick={() => {}}
                    onDragStart={() => {}}
                    thumbnailUrl="https://www.canva.dev/example-assets/images/puppyhood.jpg"
                    title="Heartwarming Chatter: Adorable Conversation with a puppy"
                  />
                </Rows>

                <Button variant="primary" onClick={onClickTemplate4} stretch>
                  {intl.formatMessage({
                    defaultMessage: "Template 4",
                    description:
                      "Button text to do something cool. Creates a new text element when pressed.",
                  })}
                </Button>
                <Button variant="primary" onClick={onClick} stretch>
                  {intl.formatMessage({
                    defaultMessage: "Template 2",
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
