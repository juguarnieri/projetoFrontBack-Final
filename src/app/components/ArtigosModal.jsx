import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "./ArtigosModal.module.css";

export default function ArtigosModal({ modalInfo, onClose }) {
  const { visible, categoria, artigos, loading } = modalInfo;

  return (
    <Modal
      title={categoria ? `Artigos - ${categoria.name}` : "Artigos"}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      className={styles.artigosModal}
    >
      {loading ? (
        <div className={styles.loadingWrapper}>
          <Image
            src="/images/loading.gif"
            width={30}
            height={30}
            alt="Carregando..."
            unoptimized
          />
          <p>Carregando artigos...</p>
        </div>
      ) : (
        <div className={styles.artigosContainer}>
          {artigos.length > 0 ? (
            artigos.map((artigo) => (
              <div key={artigo.id} className={styles.artigoCard}>
                <div className={styles.artigoImageWrapper}>
                  <Image
                    src={artigo.image_url || "/images/default-artigo.jpg"}
                    alt={artigo.title}
                    width={120}
                    height={80}
                    className={styles.artigoImage}
                  />
                </div>
                
                <div className={styles.artigoContent}>
                  <h4 className={styles.artigoTitulo}>{artigo.title}</h4>
                  <p className={styles.artigoResumo}>
                    {artigo.content.substring(0, 150)}...
                  </p>
                  
                  <div className={styles.artigoFooter}>
                    <span className={styles.artigoData}>
                      {new Date(artigo.published_at).toLocaleDateString('pt-BR')}
                    </span>
                    <Link 
                      href={`/artigo/${artigo.id}`}
                      className={styles.lerMaisBtn}
                    >
                      Ler Mais
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noArtigos}>
              <p>Nenhum artigo encontrado para esta categoria.</p>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}