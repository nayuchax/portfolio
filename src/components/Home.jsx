import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="mr-12 ml-12">
            <div className="text-xl font-bold text-center p-8">My Portfolio</div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <div className="w-full lg:w-2/5 lg:flex lg:justify-end lg:pt-8">
                            <div className="rounded-full overflow-hidden w-full lg:w-48 h-48">
                                <img
                                    src="../img/profile.jpg"
                                    alt="profile_picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5">
                            <div className="mx-auto max-w-sm rounded overflow-hidden">
                                <div className="px-6 py-4">
                                    <table className="table-auto">
                                        <tbody className="">
                                            <tr>
                                                <td className="px-6 py-4 font-medium">name</td>
                                                <td className="px-6 py-4 font-bold text-md">中川歩夢</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-medium">from</td>
                                                <td className="px-6 py-4 font-bold text-md">富山県</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-sm text-gray-700 border-t border-blue-200 pt-4 pl-2">
                                        はじめまして、中川歩夢と申します。<br />趣味は筋トレや旅行に行くことです。<br />情報系の大学に通っており、さまざまな分野を勉強中です。<br />得意な言語はpythonです。<br />よろしくお願いします。
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <Link to="/about" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> → 詳しく見る</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="text-center text-lg font-bold p-2">・Skill</div>
                    <table className="table-auto mx-auto lg:w-4/5 text-sm mb-10">
                        <thead className="text-md text-black border-t border-b border-blue-200">
                            <tr>
                                <th className="px-6 py-3">language</th>
                                <th className="px-6 py-3">framework</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white border-b border-blue-200 text-center">
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900">python</td>
                                <td className="px-6 py-4 font-medium text-gray-900">Django</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900"></td>
                                <td className="px-6 py-4 font-medium text-gray-900">FastAPI</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900">java</td>
                                <td className="px-6 py-4 font-medium text-gray-900">---</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900">javascript</td>
                                <td className="px-6 py-4 font-medium text-gray-900">react</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium text-gray-900">C</td>
                                <td className="px-6 py-4 font-medium text-gray-900">---</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mx-auto text-center lg:mx-auto lg:text-left lg:pl-14 pt-1 pb-2 mt-4 text-lg font-bold">・Works</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 justify-items-center">
                <div className="p-2 max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-md mb-2 ml-2">製品生産予想</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                            Pythonを使用して開発されたこのプロジェクトは、電力量データを元に製品の製造数を予測するものです。<br />開発期間は、約1.5ヶ月です。
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to="/works" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> → 詳しく見る</Link>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-md mb-2 ml-2">Ayuzon(ECサイト)</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                            初めて制作したこのWEBサイトは、Reactを使用したJavaScriptフレームワークをベースにしています。<br />開発期間は、約2ヶ月です。
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to="/works" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> → 詳しく見る</Link>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-md mb-2 ml-2">ChatBot</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                            このChatBotは、あいまい検索と呼ばれる手法を使用しています。このAIは特定のサイトのFAQに対して、ユーザーの質問に対する回答を出力することができます。<br />開発期間は、約２週間です。
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to="/works" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> → 詳しく見る</Link>
                    </div>
                </div>
                <div className="p-2 max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-md mb-2 ml-2">トレーニング自動作成app</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                            このアプリは、トレーニングの内容を自動で設定してくれる便利なツールです。ユーザーはトレーニングの強度や対象部位を選択することで、自動的にトレーニングプログラムが決定されます。<br />開発期間は、3日間です。
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to="/works" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> → 詳しく見る</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;