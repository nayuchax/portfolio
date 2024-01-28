import React from "react";

const Works = () => {
    return (
        <>
            <div className="text-center text-lg font-bold p-2">・Works</div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-1 md:gap-6 lg:grid-cols-2 lg:gap-10 mr-2 ml-2 md:mr-24 md:ml-24 lg:mr-12 lg:ml-12 mb-12">
                <div className="p-4 m-2 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="text-lg font-bold p-2">製品生産予想</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">ある製品を制作する際につかう電力量をグラフにすると、特徴的な波形が現れることがわかりました。<br />具体的な手法としては、scipyを使用して特定の区間でピークポイントを抽出し、これらのピークポイントと前後のデータを特徴量ベクトルに変換しました。<br />その後、取得した平均特徴量ベクトルとのコサイン類似度比較を行い、一定の閾値を超える場合に製品の生産を予測しました。</p>
                        <table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
                            <tbody className="bg-white border-t border-b border-blue-200 text-center">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">言語</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">python</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">開発期間</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">約1.5ヶ月</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">目的</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">電力量データから、製品の生産数を予測すること</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 m-2 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="text-lg font-bold p-2">ayuzon</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">これは初めて制作したECサイトで、Reactフレームワークを使用しています。<br />カート機能、いいね機能、検索機能などがありますが、バックエンド（DBなど）は実装されておらず、代わりにmockデータとReactのhookを使用して実装しています。<br />商品としては、家で飼っている犬の写真や本、デバイスなどの約200品があります。<br />この制作を通じて、企業のECサイトが使いやすいものであることを再認識しました。</p>
                        <table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
                            <tbody className="bg-white border-t border-b border-blue-200 text-center">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">言語</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">javascript</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">開発期間</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">約2ヶ月</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">目的</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">見やすい機能的なECサイトを作ること</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 m-2 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="text-lg font-bold p-2">chatbot</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">この成果物は、あいまい検索を備えたChatBotです。<br />コーパスとしてchive、sudachiトークナイザを使用してworld2vecを実装しました。<br />企業のFAQを元にし、類似度の高い３つの候補を出力します。<br />最近では、さまざまなサイトでこのあいまい検索が採用されています。<br />このプロジェクトを通じて、自然言語処理がいかに難しいかを実感しました。</p>
                        <table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
                            <tbody className="bg-white border-t border-b border-blue-200 text-center">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">言語</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">python</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">開発期間</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">約2週間</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">目的</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">あいまい検索に対応したChatBotを制作すること</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 m-2 rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="text-lg font-bold p-2">競馬予想AI</div>
                        <p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">馬のレースのタイムを線形回帰を用いて予測し、確率的勾配降下法を採用しています。<br />サイトからレースデータをスクレイピングし、予測を行っていますが、精度があまり良くないため改善が必要です。<br />特徴量として、レースの距離やタイム、天候データなどさまざまなデータを採用しました。<br/>結果として、簡単にお金を稼ぐことは難しいとの実感を得ました。</p>
                        <table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
                            <tbody className="bg-white border-t border-b border-blue-200 text-center">
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">言語</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">python</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">開発期間</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">約1ヶ月</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-medium text-gray-900">目的</td>
                                    <td className="px-6 py-4 font-bold text-md text-gray-900">馬のレースタイムを予測すること</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Works