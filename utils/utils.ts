export function getFormattedDateTime() {
   const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
   };

   const date = new Date();
   const dateString = date.toLocaleDateString("en-US", options);
   const timeString = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
   });

   return `${dateString} at ${timeString}`;
}
