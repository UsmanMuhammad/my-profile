import { Progress } from "../../components/Progress/progress";
import Image from "next/image";
import linkedinIcon from "../../../../public/icons/linkedin.svg";
import GithubIcon from "../../../../public/icons/github.svg";

export function Intro() {
  const name = "Muhammad Usman";
  const title = "Product Engineer at Accenture";
  const intro = "I am a Fullstack Software Developer. I build mobile and web applications.";
  return (
    <div className="flex min-h-screen flex-col p-24 w-max sticky top-0">
        <h4 className="text-4xl font-sans text-left font-semibold">{name}</h4>
        <h1 className="text-1xl font-sans text-left font-semibold py-2">{title}</h1>
        <div className="flex flex-row justify-normal items-center">
            <a href="https://www.linkedin.com/in/usmanmuhammad1/" target="_blank">
                <Image
                    src={linkedinIcon}
                    alt="LinkedIn Profile"
                    width={30}
                    height={30}
                    style={{
                        marginRight: "2.5px"
                    }}
                />
            </a>
            <a href="https://github.com/UsmanMuhammad" target="_blank">
                <Image
                    src={GithubIcon}
                    alt="LinkedIn Profile"
                    width={30}
                    height={30}
                    style={{
                        margin: "0 2.5px"
                    }}
                />
            </a>  
        </div>       
        <h1 className="text-1xl font-sans text-left font-light py-6">{intro}</h1>
    </div>
  );
}
