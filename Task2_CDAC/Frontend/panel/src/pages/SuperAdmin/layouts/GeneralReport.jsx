import React from 'react'

const GeneralReport = () => {
    return (
        <div className="col-span-12 mt-8">
            <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                    General Report
                </h2>
                <a href="" className="ml-auto flex items-center text-primary"> <i data-lucide="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload Data </a>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                        <div className="box p-5">
                            <div className="flex">
                                <i data-lucide="shopping-cart" className="report-box__icon text-primary"></i>
                                <div className="ml-auto">
                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                </div>
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                            <div className="text-base text-slate-500 mt-1">Market Places</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                        <div className="box p-5">
                            <div className="flex">
                                <i data-lucide="credit-card" className="report-box__icon text-pending"></i>
                                <div className="ml-auto">
                                    <div className="report-box__indicator bg-danger tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" className="w-4 h-4 ml-0.5"></i> </div>
                                </div>
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-6">3.721</div>
                            <div className="text-base text-slate-500 mt-1">Companies</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                        <div className="box p-5">
                            <div className="flex">
                                <i data-lucide="monitor" className="report-box__icon text-warning"></i>
                                <div className="ml-auto">
                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                </div>
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-6">2.149</div>
                            <div className="text-base text-slate-500 mt-1">Jobs</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div className="report-box zoom-in">
                        <div className="box p-5">
                            <div className="flex">
                                <i data-lucide="user" className="report-box__icon text-success"></i>
                                <div className="ml-auto">
                                    <div className="report-box__indicator bg-success tooltip cursor-pointer" title="22% Higher than last month"> 22% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                </div>
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-6">152.040</div>
                            <div className="text-base text-slate-500 mt-1">Assignments</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralReport