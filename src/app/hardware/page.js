export default function Hardware() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.com/channels/2850392/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=temp&type=line"
      ></iframe>

      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.com/channels/2850392/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=humidity&type=line"
      ></iframe>

      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.com/channels/2850392/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=total&type=line"
      ></iframe>

      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.com/channels/2850392/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=expired&type=line"
      ></iframe>

      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.com/channels/2850392/widgets/1026705"
      ></iframe>

      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.com/channels/2850392/widgets/1026706"
      ></iframe>
    </div>  
  );
}


