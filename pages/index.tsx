import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Head from "next/head";
import ProjectCard from "@/components/project/card";
import Divide from "@/components/divide";

import { useEffect } from 'react';
import { useRouter } from 'next/router';

function TransferToLanding() {
  useEffect(() => {
    window.location.href = "/landing";
  }, []);
  return null;
}

type Project = {
  title: string,
  hashtag: string,
  progress: number,
  imgSrc: string,
  href: string,
};

type Column = {
  id: string;
  label: string;
  type: string;
};

type Cell = {
  v: string | number | boolean | null;
  f?: string;
};

type Row = {
  c: Cell[];
};

type Props = {
  columns: Column[];
  rows: Row[];
};

function Home({ columns, rows }: Props) {
  const calculateProgress = (row: Row) => {
    let totalProcesses = 0;
    let completedProcesses = 0;

    for (let i = 10; i < row.c.length; i += 2) {
      if (row.c[i] && row.c[i + 1]) {
        totalProcesses += 1;
        if (row.c[i + 1].v === true) {
          completedProcesses += 1;
        }
      }
    }

    if (totalProcesses === 0) return 0;
    // return the number under point 1.
    return Math.round((completedProcesses / totalProcesses) * 100);
  };

  const extractDriveFileId = (url: string): string => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  return (
    <div>
      <Head>
        <title>第 13 屆學權議題儀表板 - 東華學生會議題百寶箱</title>
        {/* meta */}
        <meta property="og:title" content="第 13 屆學權議題儀表板 - 東華學生會議題百寶箱" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dashboard.dhsa.ndhu.me" />
        <meta property="og:image" content="/img/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/img/og.jpg" />
        <meta property="telegram_channel" content="turbolabit" />
        <meta property="og:description" content="東華學生會第 13 屆學權議題儀表板" />
        <meta property="og:site_name" content="東華學生會議題百寶箱" />
        <meta property="og:locale" content="zh_TW" />
      </Head>
      <div className="container mx-auto intro">
        <p>東華學生會</p>
        <p>第 13 屆學權議題儀表板</p>
      </div>
      <div className="lg:container bg-white mx-4 my-4 py-4 min-h-fit lg:w-full lg:mx-auto lg:h-64">
        <div className="highlight grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="card">
            <h2>正在進行</h2>
            <div className="grid grid-cols-1">
              <p className="big-number">5</p>
              <p className="text-center font-bold">個議題</p>
            </div>
          </div>
          <div className="card">
            <h2>熱門標籤</h2>
            <p className="hashtag">#宿舍 #選舉 #遠距教學 #地震</p>
          </div>
          <div className="card">
            <h2>已完成</h2>
            <div className="grid grid-cols-1">
              <p className="big-number">10</p>
              <p className="text-center font-bold">項領域</p>
            </div>
          </div>
        </div>
      </div>
      <Divide />
      <div className="container mx-auto my-8">
        <h1 className="text-3xl text-center my-4">我們的議題</h1>
        <div className="issue grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rows.map((row, index) => (
            index === 0 ? null :
              row.c[0]?.v === undefined ? null :
                (
                  <>
                    <ProjectCard
                      key={index}
                      title={`${row.c[4]?.v as string}`}
                      topic={row.c[3]?.v as string}
                      hashtag={row.c[2]?.v as string || ""}
                      describe={row.c[5]?.v as string || ""}
                      progress={calculateProgress(row)}
                      imgSrc={row.c[7]?.v ? `https://drive.google.com/thumbnail?sz=w1000&id=${extractDriveFileId(row.c[7].v as string)}` : "/img/og.jpg"}
                      href={index + ""}
                    />
                  </>
                )
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch the JSON data from the public directory
  const spreadsheetLink = "https://docs.google.com/spreadsheets/d/1SaAa77bJkx-tYoYzwJS_U0FrIHe8rNiabxkOAdUBAH8/gviz/tq?tqx=out:json&tq&gid=0";
  // const res = await fetch(`${process.env.SITE_DOMAIN}/sheet.json`);
  const res = await fetch(spreadsheetLink);
  const text = await res.text();

  // Extract JSON from the response format
  const match = text.match(/google.visualization.Query.setResponse\((.*)\);/);
  if (!match || match.length < 2) {
    throw new Error("Invalid response format");
  }

  const jsonString = match[1];
  const json = JSON.parse(jsonString);

  const columns = json.table.cols;
  const rows = json.table.rows;


  return {
    props: {
      columns,
      rows,
    },
  };
}

function MainComponent({ columns, rows }: Props) {
  // const router = useRouter();
  // const domain = typeof window !== 'undefined' ? window.location.hostname : '';

  // if (domain === 'dashboard.dhsa.ndhu.me') {
  //   return <TransferToLanding />;
  // }

  return <Home columns={columns} rows={rows} />;
}

export default MainComponent;
