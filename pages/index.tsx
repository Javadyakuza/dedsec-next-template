"use client";

import { useEffect, useState } from "react";
import "../src/app/globals.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import router, { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const isRtl = locale === "fa";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-black text-white space-y-4 ${
        isRtl ? "font-vazir rtl" : "font-kdam ltr"
      }`}
    >
      <p className="text-lg text-center">
        Next Template with Pages Router + i18n + tailwindcss + lottie
      </p>
      <p className="text-center">
        Also some regular folder structure as a boilerplate
      </p>
      <p className="text-center">
        And You can see a dedsec gif for absolutely no reason !
      </p>
      <img src="/dedsec.gif" alt="sample gif" className="mt-6 w-[60%] h-[50%]"  style={{borderRadius: '5rem'}}/>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
  };
};
