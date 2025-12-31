import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { COLORS } from '../../../config/colors';

export default function CartPanel({ open, setclosefun }) {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, cartTotal } = useCart();

  const variants = {
    hidden: { x: '100%', transition: { duration: 0.45, ease: 'easeInOut' } },
    visible: { x: 0, transition: { duration: 0.45, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.35, ease: 'easeInOut' } }
  };

  const overlayVariants = {
    hidden: { opacity: 0, pointerEvents: 'none' },
    visible: { opacity: 0.4, pointerEvents: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, pointerEvents: 'none', transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setclosefun()}
          />
          
          <motion.aside
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            style={{
              '--primary': COLORS.primary,
              '--text-primary': COLORS.textPrimary,
            }}
            className="fixed top-0 right-0 h-screen w-[350px] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50">
              <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <ShoppingBag size={20} className="text-[var(--primary)]" />
                Shopping Cart
              </h2>
              <button
                onClick={() => setclosefun()}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">
              {cartItems.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start">
                      <div className="w-20 h-20 bg-gray-50 rounded-lg p-2 flex-shrink-0 border border-gray-100">
                        <img 
                          src={item.src} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] line-clamp-2 leading-tight mb-1">
                          {item.name}
                        </h4>
                        <div className="text-sm text-gray-500 mb-2">
                          Price: {item.price}
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">Qty: {item.qty}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-2">
                   <ShoppingBag size={48} className="text-gray-200" />
                   <p>Your cart is empty</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 bg-white border-t border-gray-100 shadow-[0_-4px_15px_-5px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-medium">Total:</span>
                <span className="text-xl font-bold text-[var(--primary)]">£{cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => {
                    navigate('/cart');
                    setclosefun();
                  }}
                  className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200 cursor-pointer text-sm tracking-wide"
                >
                  View Cart
                </button>
                <button className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-200 cursor-pointer text-sm tracking-wide">
                  Checkout
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
