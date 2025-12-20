import React, { useState, useMemo } from "react";
import { Menus, products as defaultProducts } from "../../config/constants";
import { ChevronRight, ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ViewMenuList from "./ViewMenus";
import ViewItems from "./ViewItems";

export default function Menulist({
  searchQuery = "",
  variant = "home", // "home" or "full"
  limit = null, // Number of products to display (null = show all, or use pagination if enabled)
  showSort = false, // For full variant
  showPagination = false, // For full variant
  initialCategory = "Pizza", // Default category
  itemsPerPage = 12, // Items per page for pagination
  hideFilter = false, // New prop to hide internal filter
  products: customProducts = null, // New prop to override products
  ItemComponent = ViewItems, // New prop to allow custom item card
  hideCountText = false, // New prop to hide the check items count text
}) {
  const navigate = useNavigate();
  const [active, setActiveState] = useState(initialCategory);
  const [sortBy, setSortByState] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  // Use custom products if provided, otherwise default
  const products = customProducts || defaultProducts;

  // Wrapper function to handle category change and reset pagination
  const setActive = (category) => {
    setActiveState(category);
    if (showPagination) {
      setCurrentPage(1);
    }
  };

  // Wrapper function to handle sort change and reset pagination
  const setSortBy = (newSortBy) => {
    setSortByState(newSortBy);
    if (showPagination) {
      setCurrentPage(1);
    }
  };

  // Reset page when search query changes (external prop)
  const prevSearchQueryRef = React.useRef(searchQuery);
  React.useEffect(() => {
    if (showPagination && prevSearchQueryRef.current !== searchQuery) {
      setCurrentPage(1);
      prevSearchQueryRef.current = searchQuery;
    }
  }, [searchQuery, showPagination]);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    filtered = filtered.filter((product) => product.category === active);

    // Filter by search query (only for full variant or when searchQuery is provided)
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.description &&
            product.description.toLowerCase().includes(query))
      );
    }

    // Sort products (only for full variant with sorting enabled)
    if (showSort) {
      switch (sortBy) {
        case "name-asc":
          filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          filtered = [...filtered].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[£,]/g, ""));
            const priceB = parseFloat(b.price.replace(/[£,]/g, ""));
            return priceA - priceB;
          });
          break;
        case "price-desc":
          filtered = [...filtered].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[£,]/g, ""));
            const priceB = parseFloat(b.price.replace(/[£,]/g, ""));
            return priceB - priceA;
          });
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [active, searchQuery, sortBy, showSort]);

  // Control displayed products based on limit or pagination
  const displayedProducts = useMemo(() => {
    // If pagination is enabled, use pagination
    if (showPagination) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return filteredProducts.slice(startIndex, endIndex);
    }
    // If limit is provided, limit the products
    if (limit !== null && limit > 0) {
      return filteredProducts.slice(0, limit);
    }
    // Otherwise, show all products
    return filteredProducts;
  }, [filteredProducts, limit, showPagination, currentPage, itemsPerPage]);

  // Pagination
  const totalPages = showPagination
    ? Math.ceil(filteredProducts.length / itemsPerPage)
    : 1;
  const startIndex = showPagination ? (currentPage - 1) * itemsPerPage : 0;
  const endIndex = showPagination
    ? startIndex + itemsPerPage
    : displayedProducts.length;

  // Responsive grid columns: 1 col on mobile, 2 on sm, 3 on md, 4 on lg and above
  const gridCols = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  // Padding based on variant
  const containerPadding =
    variant === "home"
      ? "px-4 md:px-8 lg:px-[70px]"
      : "px-4 md:px-8 lg:px-[70px]";

  const handleViewMore = () => {
    navigate("/menu");
  };

  return (
    <div
      className={`${containerPadding} mt-4 ${
        variant === "full" ? "pb-16" : "pb-10"
      }`}
    >
      {/* Header Section */}
      <div
        className={`flex flex-col ${
          showSort ? "md:flex-row md:items-center md:justify-between" : ""
        } gap-4 ${variant === "full" ? "mb-6" : "mb-3"}`}
      >
        <div>
          <h2
            className={`${
              variant === "full" ? "text-2xl md:text-3xl" : "text-3xl"
            } font-bold text-[#2F3E30] ${variant === "full" ? "mb-2" : "mb-0"}`}
          >
            {variant === "full" && searchQuery
              ? `Search Results (${filteredProducts.length})`
              : "Menu List"}
          </h2>
          {variant === "full" && (
            <p className="text-gray-600 text-sm md:text-base">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "recipe" : "recipes"} found
            </p>
          )}
        </div>

        {/* Sort Controls - Only for full variant */}
        {showSort && (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
                className="appearance-none bg-white border-2 border-gray-200 rounded-full px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:border-[#5C9963] transition-colors cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
              <ArrowUpDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        )}
      </div>

      {/* Category Filter */}
      {!hideFilter && (
        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="relative flex-1 min-w-[100px] h-[2px] bg-gray-200 hidden md:block">
            <div className="absolute left-0 top-0 h-full w-16 bg-[#5C9963]" />
          </div>

          <div className="flex gap-2 md:gap-3 flex-nowrap">
            {Menus.map((item, index) => (
              <ViewMenuList
                key={index}
                item={item}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      {displayedProducts.length > 0 ? (
        <>
          <div
            className={`w-full grid ${gridCols} gap-4 md:gap-6 ${
              variant === "full" ? "mb-8" : "mt-[30px] pb-10"
            }`}
          >
            {displayedProducts.map((product) => (
              <ItemComponent key={product.id} product={product} />
            ))}
          </div>

          {/* View More Button - Show when limit is set and there are more products */}
          {limit !== null &&
            limit > 0 &&
            !showPagination &&
            filteredProducts.length > limit && (
              <button
                onClick={handleViewMore}
                className="w-[250px] h-[40px] border-2 border-gray-100 rounded-full flex items-center mx-auto justify-center group hover:bg-[#5C9963] duration-300 cursor-pointer"
              >
                <span className="ml-3 text-[#737574] group-hover:text-white duration-300">
                  View More
                </span>
                <ChevronRight
                  strokeWidth={0.8}
                  size={20}
                  className="text-[#737574] group-hover:text-white duration-300 translate-y-0.5 group-hover:translate-x-1.5"
                />
              </button>
            )}

          {/* Pagination - Only for full variant */}
          {variant === "full" && showPagination && totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              {!hideCountText && (
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} -{" "}
                  {Math.min(endIndex, filteredProducts.length)} of{" "}
                  {filteredProducts.length} recipes
                </div>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-full border-2 border-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5C9963] hover:text-white hover:border-[#5C9963] transition-colors"
                >
                  Previous
                </button>

                <div className="flex items-center gap-1 flex-wrap justify-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      return (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      );
                    })
                    .map((page, index, array) => {
                      const prevPage = array[index - 1];
                      const showEllipsis = prevPage && page - prevPage > 1;

                      return (
                        <React.Fragment key={page}>
                          {showEllipsis && (
                            <span className="px-2 text-gray-400">...</span>
                          )}
                          <button
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-full transition-colors ${
                              currentPage === page
                                ? "bg-[#5C9963] text-white"
                                : "border-2 border-gray-200 text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      );
                    })}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-full border-2 border-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#5C9963] hover:text-white hover:border-[#5C9963] transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            No recipes found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
