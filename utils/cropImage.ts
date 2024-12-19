export const getCroppedImageDataUrl = (
    url: string,
    targetWidth,
    targetHeight,
    borderRadius?: number
  ): Promise<string> => {
    // const imageUrl = url.includes("localhost") ? url : "https://corsproxy.io/?" + encodeURIComponent(url);
    const imageUrl = url;
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Handle CORS issues if the image is hosted on a different origin
      img.src = imageUrl;
  
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const targetAspectRatio = targetWidth / targetHeight;
  
        let sourceX, sourceY, sourceWidth, sourceHeight;
  
        if (aspectRatio > targetAspectRatio) {
          // Image is wider than target, crop the sides
          sourceHeight = img.height;
          sourceWidth = img.height * targetAspectRatio;
          sourceX = (img.width - sourceWidth) / 2;
          sourceY = 0;
        } else {
          // Image is taller than target, crop the top and bottom
          sourceWidth = img.width;
          sourceHeight = img.width / targetAspectRatio;
          sourceX = 0;
          sourceY = (img.height - sourceHeight) / 2;
        }
  
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(
          img,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          0,
          0,
          targetWidth,
          targetHeight
        );
        // Apply border radius if provided
        if (borderRadius) {
          const radiusX = (targetWidth * borderRadius) / 100;
          const radiusY = (targetHeight * borderRadius) / 100;
  
          // Create a new canvas to apply the border radius
          const finalCanvas = document.createElement("canvas");
          finalCanvas.width = targetWidth;
          finalCanvas.height = targetHeight;
          const finalCtx = finalCanvas.getContext("2d")!;
  
          finalCtx.beginPath();
          finalCtx.moveTo(radiusX, 0);
          finalCtx.lineTo(targetWidth - radiusX, 0);
          finalCtx.quadraticCurveTo(targetWidth, 0, targetWidth, radiusY);
          finalCtx.lineTo(targetWidth, targetHeight - radiusY);
          finalCtx.quadraticCurveTo(
            targetWidth,
            targetHeight,
            targetWidth - radiusX,
            targetHeight
          );
          finalCtx.lineTo(radiusX, targetHeight);
          finalCtx.quadraticCurveTo(0, targetHeight, 0, targetHeight - radiusY);
          finalCtx.lineTo(0, radiusY);
          finalCtx.quadraticCurveTo(0, 0, radiusX, 0);
          finalCtx.closePath();
          finalCtx.clip();
  
          // Draw the cropped image onto the new canvas with the clipping path applied
          finalCtx.drawImage(canvas, 0, 0);
  
          resolve(finalCanvas.toDataURL());
        } else {
          resolve(canvas.toDataURL());
        }
      };
  
      img.onerror = (err) => {
        reject(err);
      };
    });
  };