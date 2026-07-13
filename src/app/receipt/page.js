'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTools,
  faPlus,
  faTrash,
  faPrint,
  faArrowLeft,
  faUndo,
  faIndianRupeeSign,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faFileInvoice,
  faCalendarAlt,
  faReceipt,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../components/ThemeProvider';

// ── Preset catalog for quick selection ──
const SERVICE_PRESETS = [
  // AC Services
  { category: 'AC Services', label: 'AC Gas Refilling', price: 1800 },
  { category: 'AC Services', label: 'AC General Service', price: 800 },
  { category: 'AC Services', label: 'AC Filter Cleaning', price: 300 },
  { category: 'AC Services', label: 'AC PCB Repair', price: 1500 },
  { category: 'AC Services', label: 'AC Compressor Replacement', price: 4500 },
  // Washing Machine
  { category: 'Washing Machine', label: 'Washing Machine Motor Repair', price: 1200 },
  { category: 'Washing Machine', label: 'Washing Machine Water Pump Replacement', price: 800 },
  { category: 'Washing Machine', label: 'Washing Machine Door Lock Repair', price: 500 },
  { category: 'Washing Machine', label: 'Washing Machine PCB/Timer Repair', price: 1500 },
  { category: 'Washing Machine', label: 'Washing Machine General Service', price: 600 },
  // Refrigerator
  { category: 'Refrigerator', label: 'Refrigerator Gas Refilling', price: 2000 },
  { category: 'Refrigerator', label: 'Refrigerator Thermostat Replacement', price: 900 },
  { category: 'Refrigerator', label: 'Refrigerator Door Seal Replacement', price: 1200 },
  { category: 'Refrigerator', label: 'Refrigerator Compressor Replacement', price: 4500 },
  { category: 'Refrigerator', label: 'Refrigerator General Service', price: 500 },
  // Microwave
  { category: 'Microwave', label: 'Microwave General Repair', price: 800 },
  { category: 'Microwave', label: 'Microwave Magnetron Replacement', price: 2800 },
  { category: 'Microwave', label: 'Microwave Turntable Motor Replacement', price: 600 },
  { category: 'Microwave', label: 'Microwave Door Switch Repair', price: 400 },
];

export default function ReceiptGenerator() {
  const { dark, toggle } = useTheme();

  // ── State variables ──
  const [receiptNo, setReceiptNo] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [paymentStatus, setPaymentStatus] = useState('Paid');

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const [applianceType, setApplianceType] = useState('AC');
  const [applianceBrand, setApplianceBrand] = useState('');

  const [items, setItems] = useState([
    { description: 'General Service & Diagnosis', price: 150, quantity: 1 }
  ]);

  const [discountType, setDiscountType] = useState('flat'); // flat or percent
  const [discountValue, setDiscountValue] = useState(0);
  const [gstRate, setGstRate] = useState(0); // 0%, 5%, 12%, 18%
  const [visitingCharge, setVisitingCharge] = useState(150);
  const [isVisitingChargeWaived, setIsVisitingChargeWaived] = useState(true);

  const [notes, setNotes] = useState(
    'Thank you for choosing QuickCool Repairs!\nWarranty: 3 months warranty on genuine replaced parts.\nNo warranty on physical damages or external electrical faults.'
  );

  // ── Auto-generate receipt number & date on load ──
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setReceiptNo(`QC-${yyyy}${mm}${dd}-${randomNum}`);
  }, []);

  // ── Event handlers ──
  const handleAddItem = () => {
    setItems([...items, { description: '', price: 0, quantity: 1 }]);
  };

  const handleRemoveItem = (index) => {
    if (items.length === 1) {
      setItems([{ description: '', price: 0, quantity: 1 }]);
    } else {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    if (field === 'price') {
      newItems[index][field] = parseFloat(value) || 0;
    } else if (field === 'quantity') {
      newItems[index][field] = parseInt(value) || 1;
    } else {
      newItems[index][field] = value;
    }
    setItems(newItems);
  };

  const handleQuickAdd = (preset) => {
    // If the only item is empty/default, replace it, otherwise append
    if (items.length === 1 && items[0].description === '' && items[0].price === 0) {
      setItems([{ description: preset.label, price: preset.price, quantity: 1 }]);
    } else {
      setItems([...items, { description: preset.label, price: preset.price, quantity: 1 }]);
    }
  };

  const handleReset = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const randomNum = Math.floor(1000 + Math.random() * 9000);

    setReceiptNo(`QC-${yyyy}${mm}${dd}-${randomNum}`);
    setDate(`${yyyy}-${mm}-${dd}`);
    setPaymentMethod('UPI');
    setPaymentStatus('Paid');
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
    setApplianceType('AC');
    setApplianceBrand('');
    setItems([{ description: 'General Service & Diagnosis', price: 150, quantity: 1 }]);
    setDiscountType('flat');
    setDiscountValue(0);
    setGstRate(0);
    setVisitingCharge(150);
    setIsVisitingChargeWaived(true);
    setNotes(
      'Thank you for choosing QuickCool Repairs!\nWarranty: 3 months warranty on genuine replaced parts.\nNo warranty on physical damages or external electrical faults.'
    );
  };

  // ── Calculation logic ──
  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateDiscount = (subtotal) => {
    if (discountType === 'percent') {
      return (subtotal * discountValue) / 100;
    }
    return discountValue;
  };

  const getVisitingAmount = () => {
    return isVisitingChargeWaived ? 0 : visitingCharge;
  };

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const activeVisitingCharge = getVisitingAmount();
  const amountBeforeTax = Math.max(0, subtotal - discount) + activeVisitingCharge;
  const gstAmount = (amountBeforeTax * gstRate) / 100;
  const grandTotal = amountBeforeTax + gstAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      
      {/* ── Printing custom styles ── */}
      <style jsx global>{`
        @media print {
          /* Hide everything except the print-area */
          body * {
            visibility: hidden;
            background: transparent !important;
          }
          #print-receipt-section, #print-receipt-section * {
            visibility: visible;
          }
          #print-receipt-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
            box-shadow: none !important;
            border: none !important;
            background-color: white !important;
            color: black !important;
          }
          /* Ensure black text for contrast in print */
          .print-text-dark {
            color: #000000 !important;
          }
          .print-bg-gray {
            background-color: #f3f4f6 !important;
          }
          .print-border-gray {
            border-color: #d1d5db !important;
          }
          /* Hide page header/footer default elements from browser */
          @page {
            margin: 10mm 15mm;
          }
        }
      `}</style>

      {/* ── Navigation Header (Hidden on Print) ── */}
      <header className="print:hidden sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="inline-flex items-center text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 font-medium transition-colors">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Home
            </Link>
            <span className="text-gray-300 dark:text-gray-700">|</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faTools} className="text-white text-sm" />
              </div>
              <span className="font-display font-bold text-lg hidden sm:inline">
                QuickCool Repairs
              </span>
            </div>
          </div>
          
          <h1 className="text-base sm:text-xl font-bold font-display text-gradient">
            Receipt Generator
          </h1>

          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Toggle theme"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* ── Main content grid ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT PANEL: Inputs & Configuration (Hidden on Print) ── */}
          <section className="print:hidden lg:col-span-6 space-y-6">
            
            {/* Customer & Receipt Details */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 dark:border-gray-800 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <FontAwesomeIcon icon={faReceipt} className="text-primary-500 mr-2" />
                  Receipt Details
                </h3>
                <button
                  onClick={handleReset}
                  className="text-sm font-semibold text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 flex items-center transition-colors"
                >
                  <FontAwesomeIcon icon={faUndo} className="mr-1" /> Reset
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Receipt Number</label>
                  <input
                    type="text"
                    value={receiptNo}
                    onChange={(e) => setReceiptNo(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                    placeholder="QC-20260713-1234"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Payment Method</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                  >
                    <option value="UPI">UPI (GPay / PhonePe / Paytm)</option>
                    <option value="Cash">Cash</option>
                    <option value="Card">Credit / Debit Card</option>
                    <option value="Net Banking">Net Banking</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Payment Status</label>
                  <select
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid / Invoice</option>
                    <option value="Advance">Advance Paid</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800 my-6 pt-6">
                <h4 className="font-semibold mb-4 text-sm text-gray-600 dark:text-gray-300">Customer Information</h4>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Customer Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                    />
                    <select
                      value={applianceType}
                      onChange={(e) => setApplianceType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                    >
                      <option value="AC">AC</option>
                      <option value="Washing Machine">Washing Machine</option>
                      <option value="Refrigerator">Refrigerator</option>
                      <option value="Microwave">Microwave</option>
                      <option value="Other">Other Category</option>
                    </select>
                    <input
                      type="text"
                      value={applianceBrand}
                      onChange={(e) => setApplianceBrand(e.target.value)}
                      placeholder="Brand/Model (e.g. Voltas)"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <textarea
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Service Address"
                      rows={2}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500 resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Line Items Builder */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 dark:border-gray-800 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center">
                  <FontAwesomeIcon icon={faTools} className="text-primary-500 mr-2" />
                  Service &amp; Spare Items
                </h3>
              </div>

              {/* Quick Add Presets */}
              <div className="mb-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">⚡ Quick Add Standard Services</h4>
                <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1">
                  {SERVICE_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => handleQuickAdd(preset)}
                      className="w-full text-left text-xs bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 p-2 rounded-lg border border-gray-100 dark:border-gray-700 flex justify-between items-center transition-colors"
                    >
                      <span className="font-medium">{preset.label}</span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">₹{preset.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div className="flex-1 w-full">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        placeholder="Service / Part Description"
                        className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-primary-500 text-sm"
                      />
                    </div>
                    <div className="flex items-center space-x-2 w-full sm:w-auto">
                      <div className="relative flex-1 sm:w-28">
                        <span className="absolute left-3 top-2.5 text-gray-400 text-xs font-semibold">₹</span>
                        <input
                          type="number"
                          value={item.price || ''}
                          onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                          placeholder="Price"
                          className="w-full pl-7 pr-2 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-primary-500 text-sm font-semibold"
                        />
                      </div>
                      <div className="w-16">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                          placeholder="Qty"
                          className="w-full px-2 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-center focus:outline-none focus:border-primary-500 text-sm"
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-2 transition-colors"
                        title="Remove item"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleAddItem}
                className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center transition-all"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2 text-xs" /> Add Custom Line Item
              </button>
            </div>

            {/* Calculations & Discounts */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 dark:border-gray-800 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FontAwesomeIcon icon={faIndianRupeeSign} className="text-primary-500 mr-2" />
                Discounts &amp; Charges
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Discount Type</label>
                  <div className="flex bg-gray-50 dark:bg-slate-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setDiscountType('flat')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                        discountType === 'flat'
                          ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-white shadow-sm'
                          : 'text-gray-500 hover:text-gray-800 dark:text-gray-400'
                      }`}
                    >
                      Flat (₹)
                    </button>
                    <button
                      onClick={() => setDiscountType('percent')}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                        discountType === 'percent'
                          ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-white shadow-sm'
                          : 'text-gray-500 hover:text-gray-800 dark:text-gray-400'
                      }`}
                    >
                      Percent (%)
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Discount Value</label>
                  <input
                    type="number"
                    min="0"
                    value={discountValue || ''}
                    onChange={(e) => setDiscountValue(parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500 font-semibold"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">GST / Tax Rate</label>
                  <select
                    value={gstRate}
                    onChange={(e) => setGstRate(parseInt(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500"
                  >
                    <option value="0">No Tax / GST (0%)</option>
                    <option value="5">GST (5%)</option>
                    <option value="12">GST (12%)</option>
                    <option value="18">GST (18%)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Visiting Charge (₹)</label>
                  <div className="flex items-center space-x-3 mt-2">
                    <input
                      type="checkbox"
                      id="waive-visiting"
                      checked={isVisitingChargeWaived}
                      onChange={(e) => setIsVisitingChargeWaived(e.target.checked)}
                      className="w-5 h-5 rounded text-primary-500 focus:ring-primary-500"
                    />
                    <label htmlFor="waive-visiting" className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      Waived / Free
                    </label>
                    {!isVisitingChargeWaived && (
                      <input
                        type="number"
                        value={visitingCharge}
                        onChange={(e) => setVisitingCharge(parseFloat(e.target.value) || 0)}
                        className="w-20 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 text-center font-semibold text-xs"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Terms, Notes &amp; Warranty</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:border-primary-500 text-sm resize-none"
                />
              </div>
            </div>
          </section>

          {/* ── RIGHT PANEL: Pixel Perfect Receipt Live Preview ── */}
          <section className="lg:col-span-6 space-y-6">
            
            {/* Print trigger button (Hidden on Print) */}
            <div className="print:hidden bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-md border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 transition-colors">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-lg">Live Receipt Preview</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Ready to save or print on standard paper</p>
              </div>
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPrint} className="mr-2" />
                Print / Save PDF
              </button>
            </div>

            {/* Receipt Preview Box (Printed Container) */}
            <div
              id="print-receipt-section"
              className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200 transition-colors duration-300 relative print-text-dark"
            >
              {/* PAID stamp */}
              {paymentStatus === 'Paid' && (
                <div className="absolute top-28 right-8 border-4 border-emerald-500 text-emerald-500 font-display font-extrabold text-xl px-4 py-2 uppercase rounded-xl tracking-wider rotate-12 opacity-80 pointer-events-none">
                  PAID
                </div>
              )}
              {paymentStatus === 'Advance' && (
                <div className="absolute top-28 right-8 border-4 border-amber-500 text-amber-500 font-display font-extrabold text-xl px-4 py-2 uppercase rounded-xl tracking-wider rotate-12 opacity-80 pointer-events-none">
                  ADVANCE
                </div>
              )}
              {paymentStatus === 'Unpaid' && (
                <div className="absolute top-28 right-8 border-4 border-red-500 text-red-500 font-display font-extrabold text-xl px-4 py-2 uppercase rounded-xl tracking-wider rotate-12 opacity-80 pointer-events-none">
                  INVOICE
                </div>
              )}

              {/* Receipt Header branding */}
              <div className="flex flex-col sm:flex-row justify-between items-start pb-6 border-b-2 border-slate-100 print-border-gray mb-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faTools} className="text-white text-lg" />
                    </div>
                    <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">
                      QuickCool Repairs
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Comfort Care Services</p>
                </div>
                <div className="text-left sm:text-right mt-4 sm:mt-0 text-xs text-gray-600 space-y-1">
                  <p className="flex sm:justify-end items-center"><FontAwesomeIcon icon={faPhone} className="mr-1.5 w-3" /> +91 84548 55804</p>
                  <p className="flex sm:justify-end items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-1.5 w-3" /> comfortcare.engineer@gmail.com</p>
                  <p className="flex sm:justify-end items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1.5 w-3" /> Mumbai &amp; Greater Metro Area</p>
                </div>
              </div>

              {/* Meta information grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-xs text-gray-700 bg-slate-50 print-bg-gray p-4 rounded-2xl">
                <div>
                  <p className="mb-2"><span className="font-bold text-gray-500">RECEIPT NO:</span> <span className="font-mono font-bold text-gray-900">{receiptNo || 'N/A'}</span></p>
                  <p className="mb-2 flex items-center"><span className="font-bold text-gray-500 mr-2">DATE:</span> <span className="font-semibold text-gray-900"><FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-gray-400" /> {date || 'N/A'}</span></p>
                  <p className="mb-2"><span className="font-bold text-gray-500">PAYMENT STATUS:</span> <span className={`font-bold ${paymentStatus === 'Paid' ? 'text-emerald-600' : paymentStatus === 'Advance' ? 'text-amber-600' : 'text-red-600'}`}>{paymentStatus}</span></p>
                  <p><span className="font-bold text-gray-500">METHOD:</span> <span className="font-semibold text-gray-900">{paymentMethod}</span></p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-bold text-gray-500">APPLIANCE:</span> <span className="font-bold text-gray-900">{applianceType}</span></p>
                  <p className="mb-2"><span className="font-bold text-gray-500">BRAND / MODEL:</span> <span className="font-semibold text-gray-900">{applianceBrand || 'Generic Brand'}</span></p>
                  {customerName && <p className="mb-2"><span className="font-bold text-gray-500">BILL TO:</span> <span className="font-bold text-gray-900">{customerName}</span></p>}
                  {customerPhone && <p className="mb-2"><span className="font-bold text-gray-500">PHONE:</span> <span className="font-semibold text-gray-900">{customerPhone}</span></p>}
                </div>
              </div>

              {/* Service Address (if provided) */}
              {customerAddress && (
                <div className="mb-6 text-xs text-gray-700 bg-slate-50 print-bg-gray p-4 rounded-2xl">
                  <span className="font-bold text-gray-500 block mb-1">SERVICE ADDRESS:</span>
                  <span className="font-semibold text-gray-900 leading-relaxed whitespace-pre-wrap">{customerAddress}</span>
                </div>
              )}

              {/* Invoice/Receipt Items Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b-2 border-slate-100 print-border-gray text-gray-500 font-bold">
                      <th className="pb-3 text-left">Description of Service / Part</th>
                      <th className="pb-3 text-center w-20">Unit Price</th>
                      <th className="pb-3 text-center w-12">Qty</th>
                      <th className="pb-3 text-right w-24">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 print-divide-gray">
                    {items.map((item, i) => (
                      <tr key={i} className="text-gray-800">
                        <td className="py-3 font-semibold text-gray-950">{item.description || 'Appliance Diagnostics & Servicing'}</td>
                        <td className="py-3 text-center">₹{item.price.toLocaleString('en-IN')}</td>
                        <td className="py-3 text-center">{item.quantity}</td>
                        <td className="py-3 text-right font-bold text-gray-950">₹{(item.price * item.quantity).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Receipt Summary Breakdown */}
              <div className="flex justify-end pt-4 border-t border-slate-100 print-border-gray mb-8">
                <div className="w-full sm:w-72 space-y-2.5 text-xs text-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-semibold">Subtotal:</span>
                    <span className="font-semibold text-gray-900">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-semibold">
                      <span>Discount {discountType === 'percent' ? `(${discountValue}%)` : ''}:</span>
                      <span>- ₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {!isVisitingChargeWaived && visitingCharge > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-semibold">Visiting Charge:</span>
                      <span className="font-semibold text-gray-900">₹{visitingCharge.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {gstRate > 0 && (
                    <div className="flex justify-between text-gray-600">
                      <span className="font-semibold text-gray-500">GST ({gstRate}%):</span>
                      <span className="font-semibold text-gray-900">₹{gstAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm pt-2.5 border-t border-slate-100 print-border-gray font-display font-bold text-slate-900">
                    <span className="text-base">Grand Total:</span>
                    <span className="text-base text-primary-600">₹{Math.round(grandTotal).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Terms and Signatures */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] text-gray-500 leading-relaxed border-t border-slate-100 print-border-gray pt-6">
                <div>
                  <h5 className="font-bold text-gray-700 uppercase mb-2">Terms &amp; Warranty</h5>
                  <p className="whitespace-pre-wrap">{notes}</p>
                </div>
                <div className="flex flex-col justify-end items-start md:items-end mt-4 md:mt-0">
                  <div className="text-center w-40">
                    <div className="h-10 border-b border-gray-300 print-border-gray"></div>
                    <p className="mt-2 font-bold text-gray-600 uppercase tracking-wider text-[9px]">Authorised Signature</p>
                    <p className="text-gray-400 text-[8px]">QuickCool Repairs</p>
                  </div>
                </div>
              </div>

            </div>

          </section>

        </div>
      </main>
      
    </div>
  );
}
