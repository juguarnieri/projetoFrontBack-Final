"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "antd";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import CategoriasList from "../../components/CategoriasList";
import ArtigosModal from "../../components/ArtigosModal";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./Categorias.module.css";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export default function CategoriasPage() {
  const [data, setData] = useState({
    categorias: [],
    loading: true,
    current: 1,
    pageSize: 6,
  });

  const [modalInfo, setModalInfo] = useState({
    visible: false,
    categoria: null,
    artigos: [],
    loading: false,
  });

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/categories`);
        setData({ 
          categorias: data.data, 
          loading: false, 
          current: 1, 
          pageSize: 6 
        });
        toast.success("Categorias carregadas com sucesso!");
      } catch (error) {
        toast.error("Erro ao carregar categorias");
        setData((d) => ({ ...d, loading: false }));
      }
    };

    fetchCategorias();
  }, []);

  const openModal = async (categoria) => {
    setModalInfo({ 
      visible: true, 
      categoria, 
      artigos: [], 
      loading: true 
    });

    toast.success(`Categoria "${categoria.name}" selecionada!`);

    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/articles?category=${categoria.id}`
      );
      setModalInfo((m) => ({ 
        ...m, 
        artigos: data.data, 
        loading: false 
      }));
    } catch (error) {
      toast.error("Erro ao carregar artigos da categoria.");
      setModalInfo((m) => ({ ...m, loading: false }));
    }
  };

  const paginatedCategorias = () => {
    const start = (data.current - 1) * data.pageSize;
    return data.categorias.slice(start, start + data.pageSize);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.pageContainer}>
      <Link 
        href="/" 
        className={styles.backIconButton} 
        aria-label="Voltar para Home"
      >
        <ArrowLeftOutlined />
      </Link>

      <h1 className={styles.header}>Categorias de Cuidados Caninos</h1>
      <p className={styles.subtitle}>
        Explore nossos guias especializados para cuidar melhor do seu pet
      </p>

      <div className={styles.paginationWrapper}>
        <Pagination
          current={data.current}
          pageSize={data.pageSize}
          total={data.categorias.length}
          onChange={(page, size) =>
            setData((d) => ({ ...d, current: page, pageSize: size }))
          }
          showSizeChanger
          pageSizeOptions={["6", "12", "18"]}
        />
      </div>

      {data.loading ? (
        <div className={styles.loadingWrapper}>
          <Image
            src="/images/loading.gif"
            width={50}
            height={50}
            alt="Carregando categorias..."
            unoptimized
          />
          <p>Carregando categorias...</p>
        </div>
      ) : (
        <CategoriasList
          categorias={paginatedCategorias()}
          onCardClick={openModal}
        />
      )}

      <ScrollToTopButton onClick={scrollToTop} />
      
      <ArtigosModal
        modalInfo={modalInfo}
        onClose={() =>
          setModalInfo({
            visible: false,
            categoria: null,
            artigos: [],
            loading: false,
          })
        }
      />

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}