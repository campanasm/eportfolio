import { useEffect, useState } from "react";
import ApiCard from "../components/ApiCard";

function Home() {

  const [visitorName, setVisitorName] = useState("");

  useEffect(() => {

    let name = sessionStorage.getItem("visitorName");

    if (!name) {
      name = prompt("Enter your name:");
      if (name) {
        sessionStorage.setItem("visitorName", name);
      }
    }

    if (name) {
      setVisitorName(name);
    }

  }, []);

  return (
    <main>

      <section>

        <h2>Welcome</h2>

        {visitorName && (
          <p style={{ fontWeight: "bold" }}>
            Hello, {visitorName}! Welcome to my portfolio.
          </p>
        )}

      </section>

      <section>
        <ApiCard />
      </section>

    </main>
  );
}

export default Home;