import ACH from "@/app/components/ACH";
import RTGS from "@/app/components/RTGS";

interface ContentProps {
  section: string;
  isOpen: boolean;
}

const Content = ({ section, isOpen }: ContentProps) => {
  return (
    <section>
      {/* Overlay */}
      <div
        className={
          isOpen ? "absolute inset-0 bg-black bg-opacity-80 h-full z-10" : ""
        }
      ></div>

      {/* Content */}
      <section className="p-4 sm:ml-64">
        {/* Render the appropriate section based on the section state */}
        {section === "ACH" && <ACH />}
        {section === "RTGS" && <RTGS />}
      </section>
    </section>
  );
};

export default Content;
