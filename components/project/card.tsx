import Link from "next/link";
import React from "react";
import AsyncImage from "@/components/AsyncImage";

type ProjectCardProps = {
    title: string;
    topic?: string;
    hashtag: string;
    describe?: string;
    progress: number;
    imgSrc: string;
    href: string;
  };
  

function ProjectCard({ title, topic, hashtag, describe, progress, imgSrc, href }: ProjectCardProps) {
    return (
        <Link href={`/project/` + href}>
            <div className="card">
                <h2>{title}</h2>
                <p className="hashtag">{hashtag}</p>
                {imgSrc && <AsyncImage src={imgSrc} alt={title} placeholderSrc="/img/og.jpg" className="w-full" />}
                <div className="grid grid-cols-1">
                    <p>{describe}</p>
                    <p className="progress">{progress}% 完成</p>
                    {/* progress bar */}
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;