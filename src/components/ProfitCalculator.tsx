import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ProfitCalculator = () => {
  const [pricePerPage, setPricePerPage] = useState<string | number>(3);
  const [pagesPerMonth, setPagesPerMonth] = useState<string | number>(2000);
  const [monthlyProfit, setMonthlyProfit] = useState(0);
  const [yearlyProfit, setYearlyProfit] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState("");

  // Новые параметры
  const costPerPage = 1.5;       // расходы на один лист
  const equipmentCost = 28000;   // стоимость оборудования

  // Пересчёт при изменении цены или количества страниц
  useEffect(() => {
    // Если поле пустое или не число — пропускаем
    if (
      pricePerPage === "" ||
      pagesPerMonth === "" ||
      isNaN(Number(pricePerPage)) ||
      isNaN(Number(pagesPerMonth))
    ) {
      setMonthlyProfit(0);
      setYearlyProfit(0);
      setPaybackPeriod("");
      return;
    }

    const price = Number(pricePerPage);
    const pages = Number(pagesPerMonth);
    const profitPerPage = Math.max(price - costPerPage, 0);

    const monthly = profitPerPage * pages;
    const yearly = monthly * 12;

    setMonthlyProfit(monthly);
    setYearlyProfit(yearly);

    if (monthly === 0) {
      setPaybackPeriod("Все ради пользователей");
      return;
    }

    const monthsToPayback = equipmentCost / monthly;
    if (monthsToPayback < 1) {
      setPaybackPeriod("Менее 1 месяца");
    } else if (monthsToPayback < 12) {
      setPaybackPeriod(`${Math.ceil(monthsToPayback)} месяцев`);
    } else {
      setPaybackPeriod("12 месяцев"); // поскольку equipmentCost=28000 и годовая прибыль рассчитывается, это всегда 12
    }
  }, [pricePerPage, pagesPerMonth]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (v === "") {
      setPricePerPage("");
    } else {
      const num = parseFloat(v);
      if (!isNaN(num) && num >= 0 && num <= 100) {
        setPricePerPage(num);
      }
    }
  };

  const handlePagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (v === "") {
      setPagesPerMonth("");
    } else {
      const num = parseInt(v);
      if (!isNaN(num) && num >= 0) {
        setPagesPerMonth(num);
      }
    }
  };

  return (
    <section id="calculator" className="py-0">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Калькулятор прибыли</h2>
          <p className="text-lg text-capyprint-black/70 max-w-2xl mx-auto">
            Рассчитайте прибыль от использования CapyPrint в вашей организации
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Карточка калькулятора */}
          <motion.div
            className="glass-card rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2">
              {/* Ввод данных */}
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
                      step="0.1"
                      value={pricePerPage === "" ? "" : pricePerPage}
                      onChange={handlePriceChange}
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pages-per-month">Страниц в месяц</Label>
                    <Input
                      id="pages-per-month"
                      type="number"
                      min="0"
                      step="1"
                      value={pagesPerMonth === "" ? "" : pagesPerMonth}
                      onChange={handlePagesChange}
                      className="bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Результаты */}
              <div className="p-8 md:p-10 bg-white">
                <h3 className="text-xl font-semibold mb-6 text-capyprint-black">Результаты расчёта</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-sm text-capyprint-black/70">Прибыль в месяц</span>
                    <div className="text-2xl font-bold text-capyprint-black mt-1">
                      {monthlyProfit.toLocaleString()} ₽
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-capyprint-black/70">Прибыль за год</span>
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

          {/* Сноска под калькулятором, чуть левее */}
          <motion.div
            className="mt-4 ml-4 text-sm text-capyprint-black/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            * Расчёт приблизительный и зависит от множества факторов
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
