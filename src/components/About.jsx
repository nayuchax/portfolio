import React from "react";

const About = () => {
    return (
        <>
            <div className="p-6 sm:p-12">
                <div className="grid grid-cols-1 h-full lg:grid-cols-2 xl:grid-cols-3">
                    <div className="h-full">
                        <div className="px-6 py-4 mx-auto my-auto">
                            <div className="rounded-full mx-auto py-6 overflow-hidden w-60 h-60">
                                <img
                                    src="../img/profile.jpg"
                                    alt="profile_picture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="text-xl font-bold text-center p-8">profile</div>
                        <table className="table-auto mx-auto w-4/5 text-sm m-6">
                            <tbody className="bg-white border-t border-b border-blue-200 text-center">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">名前</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">中川歩夢</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">出身</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">富山県</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">趣味特技</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">筋トレ<br />旅行</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">アルバイト</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">個別指導塾</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">資格</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">基本情報技術者試験<br />普通自動車免許</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center col-span-2 lg:col-span-1 xl:col-span-2">
                        <div className="gap-10 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            <div className="p-2 max-w-sm rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-md mb-2 ml-2">自己紹介</div>
                                    <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                                    はじめまして、中川歩夢と申します。<br />趣味は筋トレや旅行に行くことです。また、美味しいご飯を食べることも好きです。<br />情報系の大学に通っており、さまざまな分野を勉強中です。<br />得意な言語はpythonです。用途によって言語は変えるべきだと思うので、少しずつ使える言語を増やしていこうとしています。<br />よろしくお願いします。
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 max-w-sm rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-md mb-2 ml-2">目標</div>
                                    <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                                    私の目標は、人々にとってより便利なサービスを提供することです。<br/>この目標は私が高校生の頃から持っており、それを実現するために大学では情報関連の学習を進めてきました。<br/>便利なサービスを作り上げるためにプログラミングというツールを使っていくべきだと思っています。                                    </p>
                                </div>
                            </div>
                            <div className="p-2 max-w-sm rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-md mb-2 ml-2">性格</div>
                                    <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                                    私は社交的で負けず嫌いな性格だと思います。<br/>物事を達成するためには、どうすればよいかを考えることが得意です。<br/>趣味の筋トレでは、できないトレーニングに工夫を加えて目標を達成しました。<br/>また、制作物をつくる際やコーディングするときは、大きな目的から小さな目的に細分化して進めることを意識しています。
                                    </p>
                                </div>
                            </div>
                            <div className="p-2 max-w-sm rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-md mb-2 ml-2">趣味</div>
                                    <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">
                                       趣味は筋トレと旅行です。<br/>筋トレは楽しさを感じながら、より筋肉を発達させるためにさまざまな工夫をしています。<br/>少しずつではありますが、変化を実感するときが一番嬉しいです。<br/>また、長期休みには必ず旅行に行きます。<br/>旅行先で得られる新しい経験が私はとても好きです。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
