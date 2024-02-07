import React, { useState } from "react";
import Modaler from './Modaler';

const Works = () => {

    const [isModalOpen1, setModalOpen1] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const [isModalOpen3, setModalOpen3] = useState(false);
    const [isModalOpen4, setModalOpen4] = useState(false);

    const openModal1 = () => {
        setModalOpen1(true);
    };

    const closeModal1 = () => {
        setModalOpen1(false);
    };

    const openModal2 = () => {
        setModalOpen2(true);
    };

    const closeModal2 = () => {
        setModalOpen2(false);
    };

    const openModal3 = () => {
        setModalOpen3(true);
    };

    const closeModal3 = () => {
        setModalOpen3(false);
    };

    const openModal4 = () => {
        setModalOpen4(true);
    };

    const closeModal4 = () => {
        setModalOpen4(false);
    };


    return (
        <>
            <div className="text-center text-lg font-bold p-8">・Works</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center p-10">
                <div className="max-w-sm mx-auto overflow-hidden shadow-lg rounded-lg">
                    <img className="w-full h-64 object-cover object-center" src="../img/seihin_1.png" alt="Seihin Illustration 1" />
                    <div className="p-6">
                        <h2 className="text-md font-bold text-gray-800">製品生産予想</h2>
                        <p className="mt-2 text-gray-600 text-sm">Pythonを使用して開発されたこのプロジェクトは、電力量データを元に製品の製造数を予測するものです。</p>
                        <div className="px-6 pt-4 pb-2">
                            <div>
                                <button onClick={openModal1} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">→詳しく見る</button>
                                <Modaler
                                    isOpen={isModalOpen1}
                                    closeModal={closeModal1}
                                    title={<div>製品生産予想</div>}
                                    content={<p className="text-gray-700">ある製品を制作する際につかう電力量をグラフにすると、<br/>特徴的な波形が現れることがわかりました。<br />具体的な手法としては、scipyを使用して特定の区間でピークポイントを抽出し、<br/>これらのピークポイントと前後のデータを特徴量ベクトルに変換しました。<br />その後、取得した平均特徴量ベクトルとのコサイン類似度比較を行い、<br/>一定の閾値を超える場合に製品の生産を予測しました。</p>}
                                    table={<table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
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
                                    </table>}
                                    img_path={["../img/seihin_1.png", "../img/seihin_2.png", "../img/seihin_3.png"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm mx-auto overflow-hidden shadow-lg rounded-lg">
                    <img className="w-full h-64 object-cover object-center" src="../img/ayuzon_1.png" alt="Ayuzon Illustration 1" />
                    <div className="p-6">
                        <h2 className="text-md font-bold text-gray-800">ayuzon</h2>
                        <p className="mt-2 text-gray-600 text-sm">初めて制作したこのWEBサイトは、Reactを使用したJavaScriptフレームワークをベースにしています。</p>
                        <div className="px-6 pt-4 pb-2">
                            <div>
                                <button onClick={openModal2}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">→詳しく見る</button>
                                <Modaler
                                    isOpen={isModalOpen2}
                                    closeModal={closeModal2}
                                    title={<div>ayuzon</div>}
                                    content={<p className="text-gray-700 text-sm border-t border-blue-200 pt-4 pl-2">これは初めて制作したECサイトで、Reactフレームワークを使用しています。<br />カート機能、いいね機能、検索機能などがありますが、バックエンド（DBなど）は実装されておらず、代わりにmockデータとReactのhookを使用して実装しています。<br />商品としては、家で飼っている犬の写真や本、デバイスなどの約200品があります。<br />この制作を通じて、企業のECサイトが使いやすいものであることを再認識しました。</p>}
                                    table={<table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
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
                                    </table>}
                                    img_path={["../img/ayuzon_1.png", "../img/ayuzon_2.png", "../img/ayuzon_3.png"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm mx-auto overflow-hidden shadow-lg rounded-lg">
                    <img className="w-full h-64 object-cover object-center" src="./img/chatbot_2.png" alt="ChatBot Illustration 1" />
                    <div className="p-6">
                        <h2 className="text-md font-bold text-gray-800">chatbot</h2>
                        <p className="mt-2 text-gray-600 text-sm">このChatBotは、あいまい検索と呼ばれる手法を使用しています。このAIは特定のサイトのFAQに対して、ユーザーの質問に対する回答を出力することができます。</p>
                        <div className="px-6 pt-4 pb-2">
                            <div>
                                <button onClick={openModal3}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">→詳しく見る</button>
                                <Modaler
                                    isOpen={isModalOpen3}
                                    closeModal={closeModal3}
                                    title={<div>chatbot</div>}
                                    content={<p className="text-gray-700 text-sm  pt-4">この成果物は、あいまい検索を備えたChatBotです。<br />コーパスとしてchive、sudachiトークナイザを使用してworld2vecを実装しました。<br />企業のFAQを元にし、類似度の高い３つの候補を出力します。<br />最近では、さまざまなサイトでこのあいまい検索が採用されています。<br />このプロジェクトを通じて、自然言語処理がいかに難しいかを実感しました。</p>}
                                    table={<table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
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
                                    </table>}
                                    img_path={["../img/chatbot_2.png", "../img/chatbot_3.png", "../img/chatbot_1.png"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm mx-auto overflow-hidden shadow-lg rounded-lg">
                    <img className="w-full h-64 object-cover object-center" src="../img/train_1.png" alt="Train Illustration 1" />
                    <div className="p-6">
                        <h2 className="text-md font-bold text-gray-800">トレーニング自動作成app</h2>
                        <p className="mt-2 text-gray-600 text-sm">このアプリは、トレーニングの内容を自動で設定してくれる便利なツールです。ユーザーはトレーニングの強度や対象部位を選択することで、自動的にトレーニングプログラムが決定されます。</p>
                        <div className="px-6 pt-4 pb-2">
                            <div>
                                <button onClick={openModal4}className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">→詳しく見る</button>
                                <Modaler
                                    isOpen={isModalOpen4}
                                    closeModal={closeModal4}
                                    title={<div>トレーニング自動作成app</div>}
                                    content={<p className="text-gray-700 text-sm  pt-4">このアプリでは、Spring Bootフレームワークを用いて、<br/>トレーニング情報を返すAPIを開発しました。<br />さらに、Reactフレームワークを活用してAPI呼び出しを行い、<br/>ユーザーがトレーニングの強度と部位を選択することで、<br/>トレーニングが自動的に決定されます。</p>}
                                    table={<table className="row-span-1 table-auto mx-auto text-sm m-6 max-w-full ms:w-4/5">
                                        <tbody className="bg-white border-t border-b border-blue-200 text-center">
                                            <tr>
                                                <td className="px-6 py-4 font-medium text-gray-900">言語</td>
                                                <td className="px-6 py-4 font-bold text-md text-gray-900">java<br />javascript</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-medium text-gray-900">開発期間</td>
                                                <td className="px-6 py-4 font-bold text-md text-gray-900">3日間</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-medium text-gray-900">目的</td>
                                                <td className="px-6 py-4 font-bold text-md text-gray-900">トレーニングを自動で決定すること</td>
                                            </tr>
                                        </tbody>
                                    </table>}
                                    img_path={["../img/train_1.png", "../img/train_2.png", "../img/train_3.png"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Works