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

    await addPage({
      elements: [
        {
          // type: "text",
          // fontRef: "YAFdtQi73Xs:0",
          // children: ["BRADFIELD BADGERFOX"],
          // top: 10,
          // left: 0,
          // fontSize: 16,
          // fontWeight: "medium",
          // width: 300,
          // textAlign: "center",
          type: "image",
          altText: {
            text: "image",
            decorative: false,
          },
          top: 10,
          left: 0,
          height: 50,
          width: 300,
          dataUrl: "${logo}",
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
                text: "image",
                decorative: false,
              },
              top: 0,
              left: 10,
              height: 150,
              width: 300,
              dataUrl:"${photo1}",
            },
            {
              type: "image",
              altText: {
                text: "image",
                decorative: false,
              },
              top: 124,
              left: 245,
              height: 50,
              width: 50,
              dataUrl: "${primaryAgentPhoto}",
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${primaryAgent.name.firstName} ${primaryAgent.name.lastName}"],
              top: 195,
              left: 235,
              fontSize: 8,
              fontWeight: "bold",
              width: 70,
              textAlign: "center",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${primaryAgent.phone}"],
              top: 205,
              left: 235,
              fontSize: 8,
              fontWeight: "normal",
              width: 70,
              textAlign: "center",
              color: "${brandConfiguration.brandColor}"
            },
          ],
        },

        {
          type: "text",
          fontRef: "${headingFontRef}",
          children: ["VAUCLUSE"],
          top: 187,
          left: 10,
          fontSize: 8,
          fontWeight: "bold",
          width: 100,
          textAlign: "start",
          color: "${brandConfiguration.brandColor}"
        },
        {
          type: "text",
          fontRef: "${headingFontRef}",
          children: ["${selectedProperty.address.streetNo} ${selectedProperty.address.streetName} ${selectedProperty.address.streetType}"],
          top: 197,
          left: 10,
          fontSize: 8,
          width: 100,
          textAlign: "start",
          color: "${brandConfiguration.brandColor}"
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
              fontRef: "${headingFontRef}",
              children: ["${selectedProperty.bed}"],
              top: 0,
              left: 0,
              fontSize: 12,
              textAlign: "start",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "image",
              top: 0,
              left: 9,
              altText: { text: "adadsda", decorative: false },
              dataUrl:"${bedroomIcon}",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${selectedProperty.bath}"],
              top: 0,
              left: 40,
              fontSize: 12,
              textAlign: "start",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "image",
              top: 0,
              left: 49,
              altText: { text: "adadsda", decorative: false },
              dataUrl:"${bathroomIcon}",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${selectedProperty.car}"],
              top: 0,
              left: 73,
              fontSize: 12,
              textAlign: "start",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "image",
              top: 0,
              left: 82,
              altText: { text: "adadsda", decorative: false },
              dataUrl:"${parkingIcon}",
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
                    color: "${brandConfiguration.canvasBgColor}",
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
              fontRef: "${bodyFontRef}",
              children: ["Enquire Now"],
              top: 5,
              left: 5,
              fontSize: 6,
              width: 60,
              textAlign: "center",
              color: "${brandConfiguration.fontColor}"
            }
          ]
        }
        
        

      ],
    });
  };
  const onClickTemplate4 = async () => {
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
                text: "fullImage",
                decorative: false,
              },
              top: 0,
              left: 0,
              height: 460,
              width: 600,
              dataUrl:"${photo1}",
            },
            {
              type: "image",
              altText: {
                text: "agent_photo",
                decorative: false,
              },
              top: 395,
              left: 445,
              height: 115,
              width: 115,
              dataUrl:"${primaryAgentPhoto}",
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${primaryAgent.name.firstName} ${primaryAgent.name.lastName}"],
              top: 535,
              left: 440,
              fontSize: 18,
              fontWeight: "bold",
              width: 120,
              textAlign: "center",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${primaryAgent.phone}"],
              top: 560,
              left: 440,
              fontSize: 18,
              fontWeight: "normal",
              width: 120,
              textAlign: "center",
              color: "${brandConfiguration.brandColor}"
            },
          ],
        },

        {
          type: "text",
          fontRef: "${headingFontRef}",
          children: ["VAUCLUSE"],
          top: 485,
          left: 25,
          fontSize: 20,
          fontWeight: "bold",
          width: 150,
          textAlign: "start",
          color: "${brandConfiguration.brandColor}"
        },
        {
          type: "text",
          fontRef: "${headingFontRef}",
          children: ["${selectedProperty.address.streetNo} ${selectedProperty.address.streetName} ${selectedProperty.address.streetType}"],
          top: 515,
          left: 25,
          fontSize: 20,
          width: 200,
          textAlign: "start",
          color: "${brandConfiguration.brandColor}"
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
              fontRef: "${headingFontRef}",
              children: ["${selectedProperty.bed}"],
              top: 0,
              left: 0,
              fontSize: 12,
              textAlign: "start",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "image",
              top: 0,
              left: 9,
              altText: { text: "adadsda", decorative: false },
              dataUrl:"${bedroomIcon}"
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${selectedProperty.bath}"],
              top: 0,
              left: 38,
              fontSize: 12,
              textAlign: "start",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "image",
              top: 0,
              left: 47,
              altText: { text: "adadsda", decorative: false },
              dataUrl:"${bathroomIcon}",
              height: 12,
              width: 12,
            },
            {
              type: "text",
              fontRef: "${headingFontRef}",
              children: ["${selectedProperty.car}"],
              top: 0,
              left: 73,
              fontSize: 12,
              textAlign: "start",
              color: "${brandConfiguration.brandColor}"
            },
            {
              type: "image",
              top: 0,
              left: 82,
              altText: { text: "adadsda", decorative: false },
              dataUrl:"${parkingIcon}"
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
