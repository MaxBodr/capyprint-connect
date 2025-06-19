import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const ProfitCalculator = () => {
  const [pricePerPage, setPricePerPage] = useState<string | number>(3);
  const [pagesPerMonth, setPagesPerMonth] = useState(2000);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState("");

  const equipmentCost = 5000;

  useEffect(() => {
    if (pricePerPage === "" || isNaN(Number(pricePerPage))) return;

    const price = Number(pricePerPage);
    const monthly = price * pagesPerMonth;
    const yearly = monthly * 12;
    setMonthlyProfit(monthly);
    setYearlyProfit(yearly);

    const monthsToPayback = equipmentCost / monthly;
    if (monthsToPayback < 1) {
      setPaybackPeriod("Менее 1 месяца");
    } else if (monthsToPayback < 12) {
      setPaybackPeriod(`${Math.ceil(monthsToPayback)} месяцев`);
    } else {
      const years = Math.floor(monthsToPayback / 12);
      const months = Math.ceil(monthsToPayback % 12);
      setPaybackPeriod(
        `${years} ${years === 1 ? 'год' : years < 5 ? 'года' : 'лет'}${months > 0
          ? ` и ${months} ${months === 1 ? 'месяц' : months < 5 ? 'месяца' : 'месяцев'}`
          : ''}`
      );
    }
  }, [pricePerPage, pagesPerMonth]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setPricePerPage("");
    } else {
      const num = parseFloat(value);
      if (!isNaN(num) && num >= 0 && num <= 100) {
        setPricePerPage(num);
      }
    }
  };

  const handlePagesSliderChange = (value: number[]) => {
    setPagesPerMonth(value[0]);
  };

  return (
    <section id="calculator" className="py-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Калькулятор прибыли</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
            Рассчитайте прибыль от использования CapyPrint в вашей организации
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 bg-capyprint-orange/10">
                <div className="flex items-center mb-6">
                  <Calculator className="h-8 w-8 text-capyprint-orange mr-3" />
                  <h3 className="text-xl font-semibold text-capyprint-black">Введите данные</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="price-per-page">Стоимость печати 1 страницы (₽)</Label>
                    <Input
                      id="price-per-page"
                      type="number"
                      min="0"
                      max="100"
                      step="0.5"
                      value={pricePerPage === "" ? "" : pricePerPage}
                      onChange={handlePriceChange}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label htmlFor="pages-per-month">Страниц в месяц: {pagesPerMonth}</Label>
                      <span className="text-sm text-capyprint-black/70">{pagesPerMonth} стр.</span>
                    </div>
                    <Slider
                      id="pages-per-month"
                      min={100}
                      max={10000}
                      step={100}
                      value={[pagesPerMonth]}
                      onValueChange={handlePagesSliderChange}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-capyprint-black/60">
                      <span>100</span>
                      <span>5000</span>
                      <span>10000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-white">
                <h3 className="text-xl font-semibold mb-6 text-capyprint-black">Результаты расчета</h3>

                <div className="space-y-6">
                  <div>
                    <span className="text-sm text-capyprint-black/70">Доход от печати в месяц</span>
                    <div className="text-2xl font-bold text-capyprint-black mt-1">
                      {monthlyProfit.toLocaleString()} ₽
                    </div>
                  </div>

                  <div>
                    <span className="text-sm text-capyprint-black/70">Доход за год</span>
                    <div className="text-2xl font-bold text-capyprint-black mt-1">
                      {yearlyProfit.toLocaleString()} ₽
                    </div>
                  </div>

                  <div>
                    <span className="text-sm text-capyprint-black/70">Окупаемость</span>
                    <div className="text-2xl font-bold text-capyprint-orange mt-1">
                      {paybackPeriod}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center text-sm text-capyprint-black/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            * Расчет приблизительный и зависит от множества факторов
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
