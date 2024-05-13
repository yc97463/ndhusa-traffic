import Link from "next/link";
import React from "react";



function ProjectCard({ title, hashtag, progress, imgSrc, href }: { title: string, hashtag: string, progress: number, imgSrc: string, href: string }) {
    return (
        <Link href={`/project/` + href}>
            <div className="card">
                <h2>{title}</h2>
                <p className="hashtag">{hashtag}</p>
                {imgSrc && <img src={imgSrc} className="w-full" />}
                <div className="grid grid-cols-1">
                    <p className="progress">{progress}% 完成</p>
                    {/* progress bar */}
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;